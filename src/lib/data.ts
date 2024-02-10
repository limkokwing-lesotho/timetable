import { Timetable } from './modal';
import axios from 'axios';

export async function getData() {
  const res = await axios.get(process.env.FILE_URL || '');
  return cleanJson(res.data) as Timetable;
}

function cleanJson(input: string) {
  const regex = /\,(?!\s*?[\{\[\"\'\w])/g;
  const json = input.replace(regex, '');
  return JSON.parse(json);
}
