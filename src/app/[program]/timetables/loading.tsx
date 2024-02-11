import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function ProgramPage() {
  return (
    <div className='mx-auto lg:w-1/2 pb-10'>
      <div className='my-3 flex justify-center'>
        <Skeleton className='h-7 w-32' />
      </div>
      <Skeleton className='h-7 w-14' />
      <Skeleton className='h-96 w-full mt-2' />
    </div>
  );
}
