import type { Metadata } from 'next';
import '@/assets/css/styles.css';

export const metadata: Metadata = {
  title: '4a Consalting :: Test',
  description: '4a Consalting test page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
