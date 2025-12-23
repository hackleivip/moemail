export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

// /app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script'; // 👈 引入 Script

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  // ...原有 metadata 逻辑...
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        {/* 👇 插入 51.la 统计代码 */}
        <Script
          src="https://js.users.51.la/12345678.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
