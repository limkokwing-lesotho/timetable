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
    <table>
      <thead>
        <tr>
          <th></th>
          <th>08:30 - 10:30</th>
          <th>10:30 - 12:30</th>
          <th>12:30 - 14:30</th>
          <th>14:30 - 16:30</th>
        </tr>
      </thead>
      <tbody>
        {data.map((it, i) => (
          <tr key={i}>
            <td>{days[i]}</td>
            {it.map((slot, j) => (
              <td key={j}>{slot}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function getSlot(slots: Slot[], index: number) {
  const slot = slots.findLast((it) => Number(it.timeIndex) === index);
  if (!slot) return <>Empty</>;
  return (
    <div>
      <div>{slot.course}</div>
      {/* <div>{slot.lecturer}</div>
      <div>{slot.venue}</div> */}
    </div>
  );
}
