import { classes } from '../lib/modal';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <section className='flex flex-col items-stretch sm:items-center gap-3'>
      {classes.map((it) => (
        <Button
          key={it.code}
          asChild
          className='py-8 sm:min-w-[30vw]'
          variant={'outline'}
        >
          <Link key={it.code} href={`/${it.code}`}>
            {it.name}
          </Link>
        </Button>
      ))}
    </section>
  );
}
