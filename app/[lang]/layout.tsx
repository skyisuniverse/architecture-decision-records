import type { ReactNode } from 'react';
import { i18n, type Locale } from '@/i18n-config';
import ClientRootLayout from './ClientRootLayout';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  // ↓ This was the problematic line
  params: Promise<{ lang: string }>;   // ← Change here
}) {
  const { lang } = await params;

  // Optional: cast back to your strict Locale type if you need it later
  // const locale = lang as Locale;

  return (
    <html lang={lang}>
      <body>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}