import React from 'react';

import { Timetable, classes } from '../../lib/modal';
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
  const classCodes = Object.keys(data).filter((it) => it.startsWith(program));

  const programName = classes.filter((it) => it.code === program)[0].name;

  return (
    <>
      <h1 className='text-sm mb-3 text-center text-zinc-400'>{programName}</h1>
      <div className='flex flex-col items-stretch sm:items-center gap-3'>
        {classCodes.map((it) => (
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
    </>
  );
}
