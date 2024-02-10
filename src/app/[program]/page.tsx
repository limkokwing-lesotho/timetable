import React from 'react';

import { Timetable } from '../../lib/modal';
import { getData } from '@/lib/data';
import Link from 'next/link';

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
    <div className='flex flex-col items-center'>
      {classes.map((it) => (
        <Link href={`/${program}/timetables/${it}`} key={it}>
          {it}
        </Link>
      ))}
    </div>
  );
}
