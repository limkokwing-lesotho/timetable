import { classes } from './modal';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='flex flex-col gap-3 items-center'>
      {classes.map((it) => (
        <Link key={it.code} href={`/${it.code}`}>
          {it.name}
        </Link>
      ))}
    </section>
  );
}
