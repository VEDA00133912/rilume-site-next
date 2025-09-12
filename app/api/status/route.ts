// app/api/status/route.ts
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Status from '../../../models/status';

const MONGODB_URI = process.env.MONGODB_URI;

async function connectMongo() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI!);
  }
}

export async function GET() {
  try {
    await connectMongo();

    const latest = await Status.findOne().sort({ timestamp: -1 });

    if (!latest) {
      return NextResponse.json({
        online: false,
        guildCount: 0,
        guildMember: 0,
      });
    }

    const now = new Date();
    const diffMinutes = (now.getTime() - latest.timestamp.getTime()) / (1000 * 60);
    const online = diffMinutes <= 30;

    return NextResponse.json({
      online,
      guildCount: latest.guildCount,
      guildMember: latest.guildMember,
      lastUpdate: latest.timestamp,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
