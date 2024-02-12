import { classes } from '../lib/modal';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IconArrowNarrowRight, IconArrowRight } from '@tabler/icons-react';

export default function Home() {
  return (
    <>
      <section className='flex flex-col items-stretch sm:items-center gap-3'>
        {classes.map((it) => (
          <Button
            key={it.code}
            asChild
            className='sm:min-w-[35vw] group'
            variant={'outline'}
          >
            <Link
              key={it.code}
              href={`/${it.code}`}
              className='flex h-20 sm:h-24 justify-between'
            >
              <div className='space-y-1'>
                <h3 className='text-xs sm:text-base'>{it.name}</h3>
                <p className='text-sm text-zinc-400'>{it.code}</p>
              </div>
              <IconArrowRight
                className='group-hover:translate-x-1 ease-in-out transition-transform duration-300 transform'
                stroke={1}
              />
            </Link>
          </Button>
        ))}
      </section>
    </>
  );
}
