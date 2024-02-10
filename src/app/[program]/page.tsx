import React from 'react';
import { promises as fs } from 'fs';
import { Timetable } from '../modal';

type Params = {
  params: {
    program: string;
  };
};
export default async function page({ params }: Params) {
  const { program } = params;
  const file = await fs.readFile(
    process.cwd() + '/src/data/students.json',
    'utf8'
  );
  const data = JSON.parse(file);

  const keys = Object.keys(data);

  return <div>{keys.at(0)}</div>;
}
