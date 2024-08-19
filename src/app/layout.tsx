import '~/style/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '100本ノック！！',
  description: 'Next.jsの最新の書き方で100個のアプリを作ってみよう！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
