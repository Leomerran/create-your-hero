export enum TYPE {
  SOLDAT = 'Soldat',
  ARCHER = 'Archer',
  SOIGNEUR = 'Soigneur',
  MAGE = 'Mage',
}

export interface Hero {
  id: number;
  name: string;
  type: TYPE;
}

export const HEROES: Hero[] = [
  { id: 1, name: 'Tornado', type: TYPE.SOLDAT },
  { id: 2, name: 'Dr. Nice', type: TYPE.SOIGNEUR },
  { id: 3, name: 'Bombasto', type: TYPE.SOLDAT },
  { id: 4, name: 'Celeritas', type: TYPE.ARCHER },
  { id: 5, name: 'Magneta', type: TYPE.MAGE },
  { id: 6, name: 'RubberMan', type: TYPE.SOLDAT },
  { id: 7, name: 'Dynama', type: TYPE.ARCHER },
  { id: 8, name: 'Dr. IQ', type: TYPE.MAGE },
  { id: 9, name: 'Magma', type: TYPE.MAGE },
];
