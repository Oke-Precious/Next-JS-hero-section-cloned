import type {Metadata} from 'next';
import {DM_Sans, JetBrains_Mono} from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Next.js Hero Clone',
  description: 'A pixel-accurate TypeScript clone of the Next.js hero section and compact header.',
  openGraph: {
    title: 'Next.js Hero Clone',
    description: 'A pixel-accurate TypeScript clone of the Next.js hero section and compact header.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-white antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
