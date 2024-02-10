import Image from 'next/image';
import { classes } from './modal';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {classes.map((it) => (
        <Link key={it.code} href={`/${it.code}`}>
          {it.name}
        </Link>
      ))}
    </main>
  );
}
