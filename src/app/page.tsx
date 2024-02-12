import { classes } from '../lib/modal';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex md:gap-5 md:w-[80vw] md:mx-auto items-center md:h-[76vh]'>
      <Image
        width={900}
        height={900}
        src='/images/hero.svg'
        alt='hero'
        className='w-[500px] hidden md:block'
      />
      <div className='md:overflow-auto md:h-[100%] md:p-2 max-md:w-full'>
        <section className='flex flex-col items-stretch md:items-center gap-3'>
          {classes.map((it) => (
            <Button
              key={it.code}
              asChild
              className='md:min-w-[35vw] group'
              variant={'outline'}
            >
              <Link
                key={it.code}
                href={`/${it.code}`}
                className='flex h-20 md:h-24 justify-between'
              >
                <div className='space-y-1'>
                  <h3 className='text-xs md:text-base'>{it.name}</h3>
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
      </div>
    </div>
  );
}
