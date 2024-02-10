'use client';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { IconArrowNarrowLeft } from '@tabler/icons-react';

export default function BackButton() {
  const router = useRouter();
  return (
    <Button size={'sm'} variant={'ghost'} onClick={() => router.back()}>
      <IconArrowNarrowLeft className='mr-2 h-4 w-4' />
      Back
    </Button>
  );
}
