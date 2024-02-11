import React from 'react';

import { Timetable } from '../../lib/modal';
import { getData } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Params = {
  params: {
    program: string;
  };
};
export default async function page({ params }: Params) {
  const { program } = params;
  const data = await getData();
  const classes = Object.keys(data).filter((it) => it.startsWith(program));

  return (
    <div className='flex flex-col items-stretch sm:items-center gap-3'>
      {classes.map((it) => (
        <Button
          key={it}
          asChild
          className='py-8 sm:min-w-[30vw]'
          variant={'outline'}
        >
          <Link
            href={`/${program}/timetables/${it}`}
            key={it}
            className='text-center block'
          >
            {it}
          </Link>
        </Button>
      ))}
    </div>
  );
}
