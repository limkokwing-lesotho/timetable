import React from 'react';

import { Timetable } from '../../lib/modal';
import { getData } from '@/lib/data';

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
        <div key={it}>{it}</div>
      ))}
    </div>
  );
}
