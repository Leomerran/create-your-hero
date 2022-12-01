export enum TYPES {
  SOLDAT = 'Soldat',
  ARCHER = 'Archer',
  SOIGNEUR = 'Soigneur',
  MAGE = 'Mage',
}

export enum WEAPONS {
  EPEE = 'Epée',
  SCEPTRE = 'Sceptre',
  ARC = 'Arc',
  ARBALETE = 'Arbalète',
  DAGUE = 'Dague',
  DOLIPRANE = 'Doliprane',
}

export enum HERO_PROPERTY {
  ID = 'id',
  NAME = 'name',
  HEIGHT = 'height',
  SIZE = 'size',
  TYPE = 'type',
  WEAPON = 'weapon',
}

export interface Hero {
  [HERO_PROPERTY.ID]: number;
  [HERO_PROPERTY.NAME]: string;
  [HERO_PROPERTY.HEIGHT]: number;
  [HERO_PROPERTY.SIZE]: number;
  [HERO_PROPERTY.TYPE]: TYPES;
  [HERO_PROPERTY.WEAPON]: WEAPONS;
}
