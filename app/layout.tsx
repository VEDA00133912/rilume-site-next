import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Mochiy_Pop_One } from 'next/font/google';

const mochiyPop = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rilume - 多機能DiscordBOT',
  description: 'Rilumeは便利な多機能DiscordBOTです！',
  icons: {
    icon: [
      { url: '/images/meta/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/meta/favicon.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/images/meta/favicon.png',
  },
  openGraph: {
    title: 'Rilume - 多機能DiscordBOT',
    description: 'Rilumeは便利な多機能DiscordBOTです！',
    url: 'https://your-site-url.com',
    siteName: 'Rilume',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rilume - 多機能DiscordBOT',
    description: 'Rilumeは便利な多機能DiscordBOTです！',
  },
};

export const viewport: Viewport = {
  themeColor: '#ccf1fb',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={mochiyPop.className}>
        {children}
      </body>
    </html>
  );
}
