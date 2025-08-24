import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rilume - 多機能DiscordBOT",
  description: "Rilumeは便利な多機能DiscordBOTです！",
  icons: {
    icon: "/images/meta/favicon.png",
    apple: "/images/meta/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
