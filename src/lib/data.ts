import { promises as fs } from 'fs';
import { Timetable } from './modal';

export async function getData() {
  const file = await fs.readFile(
    process.cwd() + '/src/lib/students.json',
    'utf8'
  );
  return cleanJson(file) as Timetable;
}

function cleanJson(input: string) {
  const regex = /\,(?!\s*?[\{\[\"\'\w])/g;
  const json = input.replace(regex, '');
  return JSON.parse(json);
}
