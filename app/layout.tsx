import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hero Section',
  description: 'Modern hero section with video background',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

