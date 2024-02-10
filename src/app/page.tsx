import { classes } from '../lib/modal';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='space-y-5'>
      {classes.map((it) => (
        <Link key={it.code} href={`/${it.code}`} className='text-center block'>
          {it.name}
        </Link>
      ))}
    </section>
  );
}
