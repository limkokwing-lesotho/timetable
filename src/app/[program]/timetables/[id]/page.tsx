import BackButton from '@/components/BackButton';
import { getData } from '@/lib/data';
import { Slot, Timetable } from '@/lib/modal';
import { notFound } from 'next/navigation';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Props = {
  params: {
    id: string;
  };
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default async function page({ params: { id } }: Props) {
  const slots = (await getData())[id];
  if (!slots) return notFound();

  const _data = Array.from({ length: 4 * 5 }).map((_, i) => (
    <Slot slots={slots} index={i} key={i} />
  ));
  const data = Array.from({ length: 5 }).map((_, i) =>
    _data.slice(i * 4, (i + 1) * 4)
  );

  return (
    <div className='mx-auto lg:w-1/2 overflow-x-auto pb-10'>
      <h1 className='text-xl my-3 text-center'>{id}</h1>
      <BackButton />
      <Table className='text-sm sm:text-xs'>
        <TableCaption>Timetable subject to change</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'></TableHead>
            <TableHead className='w-[100px]'>08:30 - 10:30</TableHead>
            <TableHead className='w-[100px]'>10:30 - 12:30</TableHead>
            <TableHead className='w-[100px]'>12:30 - 14:30</TableHead>
            <TableHead className='w-[100px]'>14:30 - 16:30</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((it, i) => (
            <TableRow key={i}>
              <TableCell className='p-2'>{days[i]}</TableCell>
              {it.map((slot, j) => slot)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function Slot({ index, slots }: { index: number; slots: Slot[] }) {
  const slot = slots.findLast((it) => Number(it.timeIndex) === index);
  if (!slot) return <TableCell></TableCell>;
  return (
    <TableCell className='bg-muted/60'>
      <div className='text-center'>{slot.course}</div>
      <div className='flex justify-between mt-2'>
        <span>{slot.venue}</span>
        <span>{slot.lecturer}</span>
      </div>
    </TableCell>
  );
}
