import type { Metadata } from 'next';
import { Inter, STIX_Two_Text } from 'next/font/google';
import './styles.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  variable: '--font-stix',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rian — Developer Portfolio',
  description: 'Minimal typography-focused developer portfolio built with Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${stixTwoText.variable}`}>
      <body>{children}</body>
    </html>
  );
}
