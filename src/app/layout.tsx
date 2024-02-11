import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from './providers';

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
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <main className='mt-5 px-2 pb-5'>
            <Link href='/' className='flex justify-center'>
              <Image alt='Logo' src='/logo.png' width={280} height={125} />
            </Link>
            <div className='mt-5' />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
