import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Timetable',
  description: 'Limkokwing Lesotho Timetable',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='mt-10 text-white'>
          <Link href='/' className='flex justify-center'>
            <Image alt='Logo' src='/logo.png' width={280} height={125} />
          </Link>
          <div className='mt-20' />
          {children}
        </main>
      </body>
    </html>
  );
}
