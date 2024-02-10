import { getData } from '@/lib/data';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};
export default async function page({ params: { id } }: Props) {
  const data = await getData();

  console.log(data[id]);

  return <div>{id}</div>;
}
