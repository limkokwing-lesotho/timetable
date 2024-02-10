export const classes = [
  { code: 'DMSE', name: 'Diploma in Multimedia & Software Engineering' },
  { code: 'DIT', name: 'Diploma in Information Technology' },
  { code: 'DBIT', name: 'Diploma in Business Information Technology' },
  { code: 'CBIT', name: 'Certificate in Business Information Technology' },
  { code: 'BSCSM', name: 'BSc in Software Engineering with Multimedia' },
  { code: 'BSCIT', name: 'BSc in Information Technology' },
  { code: 'BSCBIT', name: 'BSc in Business Information Technology' },
];

export interface Slot {
  course: string;
  lecturer: string;
  venue: string;
  timeIndex: number;
  time: string;
}

export interface Timetable {
  [classCode: string]: Slot[];
}
