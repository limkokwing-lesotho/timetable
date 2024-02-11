import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function Page() {
  return (
    <>
      <header className='my-8 flex justify-center'>
        <Skeleton className='h-4 w-full sm:w-56' />
      </header>
      <div className='flex flex-col items-stretch sm:items-center gap-3'>
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className='py-8 sm:min-w-[30vw]' />
        ))}
      </div>
    </>
  );
}
