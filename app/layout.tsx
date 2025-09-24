import '../styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Mochiy_Pop_One } from 'next/font/google';

const mochiyPop = Mochiy_Pop_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rilume-site-next.vercel.app/'),
  title: 'Rilume - 多機能DiscordBOT',
  description: 'Rilumeは便利な多機能DiscordBOTです！',
  icons: {
    icon: [
      { url: '/images/meta/favicon.png', type: 'image/png', sizes: '16x16' },
      { url: '/images/meta/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/images/meta/favicon.png',
  },
  verification: {
    google: 'hlIYktDlMzLRRiNPFOyZcWr-NIhpcKpt1AWbqLRiWnw'
  },
  openGraph: {
    title: '{ Rilume } - 多機能DiscordBOT',
    description: 'Rilumeは多機能DiscordBOTです!!',
    url: 'https://rilume-site-next.vercel.app',
    siteName: 'RilumeSite',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://rilume-site-next.vercel.app/images/meta/rilume-og.png',
        width: 1024,
        height: 576,
        alt: '{ Rilume } - 多機能DiscordBOT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '{ Rilume } - 多機能DiscordBOT',
    description: 'Rilumeは多機能DiscordBOTです!',
    images: ['https://rilume-site-next.vercel.app/images/meta/rilume-og.png'],
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
