import { getData } from '@/lib/data';
import { Slot, Timetable } from '@/lib/modal';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default async function page({ params: { id } }: Props) {
  const slots = (await getData())[id];
  if (!slots) return notFound();

  const _data = Array.from({ length: 4 * 5 }).map((_, i) => getSlot(slots, i));
  const data = Array.from({ length: 5 }).map((_, i) =>
    _data.slice(i * 4, (i + 1) * 4)
  );

  return (
    <div className='mx-auto sm:w-1/2'>
      <h1 className='text-xl my-3'>{id}</h1>
      <table className='border-collapse border border-slate-300 text-xs sm:text-sm'>
        <thead>
          <tr>
            <th className='border border-slate-300'></th>
            <th className='border border-slate-300'>08:30 - 10:30</th>
            <th className='border border-slate-300'>10:30 - 12:30</th>
            <th className='border border-slate-300'>12:30 - 14:30</th>
            <th className='border border-slate-300'>14:30 - 16:30</th>
          </tr>
        </thead>
        <tbody>
          {data.map((it, i) => (
            <tr key={i}>
              <td className='border border-slate-300 p-2'>{days[i]}</td>
              {it.map((slot, j) => (
                <td key={j} className='border border-slate-300'>
                  {slot}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function getSlot(slots: Slot[], index: number) {
  const slot = slots.findLast((it) => Number(it.timeIndex) === index);
  if (!slot) return <></>;
  return (
    <div className='p-1 '>
      <div className='text-center'>{slot.course}</div>
      <div className='flex justify-between mt-2'>
        <span>{slot.venue}</span>
        <span>{slot.lecturer}</span>
      </div>
    </div>
  );
}
