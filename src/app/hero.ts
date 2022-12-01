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
