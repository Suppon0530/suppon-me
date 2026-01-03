import type { Metadata } from 'next';
import { Noto_Sans_JP, DotGothic16 } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto',
  subsets: ['latin'],
});

const dotGothic16 = DotGothic16({
  variable: '--font-dot',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: '鼈ゲーム',
  description: '個人開発ゲームのポートフォリオ',
  keywords: [
    'ゲーム開発',
    '個人開発',
    '深海生物の詰め放題',
    '漢字ショット',
    'キノコまみれ',
    '四字熟語探偵',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='jp'>
      <body className={`${notoSansJP.variable} ${dotGothic16.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
