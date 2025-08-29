import { NextResponse } from 'next/server';
import cron from 'node-cron';

type DiscordCommandOption = {
  type: number;
  name: string;
  description: string;
  required?: boolean;
  choices?: { name: string; value: string | number }[];
  options?: DiscordCommandOption[];
};

type DiscordCommand = {
  id: string;
  type: number;
  name: string;
  description: string;
  options?: DiscordCommandOption[];
};

let cachedCommands: DiscordCommand[] = [];

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const APP_ID = process.env.DISCORD_APP_ID;
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
    const commands: DiscordCommand[] = await res.json();
    cachedCommands = commands;
    console.log(`[${new Date().toLocaleString()}] Discord commands updated (${commands.length} commands)`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Failed to fetch Discord commands:', err.message);
    } else {
      console.error('Unknown error fetching Discord commands');
    }
  }
}

fetchCommandsFromDiscord();

cron.schedule(
  '0 0 * * *',
  () => {
    console.log('Scheduled command update at 00:00 JST');
    fetchCommandsFromDiscord();
  },
  { timezone: 'Asia/Tokyo' }
);

export async function GET() {
  if (!cachedCommands.length) await fetchCommandsFromDiscord();
  return NextResponse.json(cachedCommands);
}
