import { NextResponse } from 'next/server';
import cron from 'node-cron';

let cachedCommands: any[] = [];
let lastFetched = 0;

const BOT_TOKEN = process.env.BOT_TOKEN;
const APP_ID = process.env.BOT_ID;
if (!BOT_TOKEN || !APP_ID) {
  console.warn('Bot token or app ID not set');
}

async function fetchCommandsFromDiscord() {
  try {
    const res = await fetch(`https://discord.com/api/v10/applications/${APP_ID}/commands`, {
      headers: {
        Authorization: `Bot ${BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(`Discord API returned ${res.status}`);
    const commands = await res.json();
    cachedCommands = commands;
    lastFetched = Date.now();
    console.log(`[${new Date().toLocaleString()}] Discord commands updated (${commands.length} commands)`);
  } catch (err: any) {
    console.error('Failed to fetch Discord commands:', err.message);
  }
}

// 初回起動時に取得
fetchCommandsFromDiscord();

// 毎日0時に更新 (日本時間)
cron.schedule('0 0 * * *', () => {
  console.log('Scheduled command update at 00:00 JST');
  fetchCommandsFromDiscord();
}, {
  timezone: 'Asia/Tokyo'
});

export async function GET() {
  if (!cachedCommands.length) await fetchCommandsFromDiscord();
  return NextResponse.json(cachedCommands);
}
