import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client Proof Pack Builder — Streamline client reporting for agencies',
  description:
    'Client Proof Pack Builder helps small digital agencies transform scattered campaign results into client-ready proof packs, justify retainers, and improve renewals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 antialiased`}>
        {/* Demo Mode Banner (Persistent, Top-level) */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 text-zinc-100 text-xs px-4 py-2 flex justify-between items-center">
          <span className="font-medium">⚡ Demo Mode — Client Proof Pack Builder · Built with NEXUS OS</span>
          <Link href="/dashboard" className="text-white hover:text-indigo-400 flex items-center gap-1">
            Open Dashboard →
          </Link>
        </div>
        {/* Content wrapper to offset fixed banner */}
        <div className="pt-9">{children}</div>
      </body>
    </html>
  );
}