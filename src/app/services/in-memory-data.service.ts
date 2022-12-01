import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero, TYPES, WEAPONS } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'Tornado',
        height: 194,
        size: 98.4,
        type: TYPES.SOLDAT,
        weapon: WEAPONS.EPEE,
      },
      {
        id: 2,
        name: 'Dr. Nice',
        height: 176,
        size: 82.2,
        type: TYPES.SOIGNEUR,
        weapon: WEAPONS.DOLIPRANE,
      },
      {
        id: 3,
        name: 'Bombasto',
        height: 181,
        size: 90.1,
        type: TYPES.SOLDAT,
        weapon: WEAPONS.EPEE,
      },
      {
        id: 4,
        name: 'Celeritas',
        height: 168,
        size: 76.7,
        type: TYPES.ARCHER,
        weapon: WEAPONS.ARC,
      },
      {
        id: 5,
        name: 'Magneta',
        height: 190,
        size: 84.1,
        type: TYPES.MAGE,
        weapon: WEAPONS.SCEPTRE,
      },
      {
        id: 6,
        name: 'RubberMan',
        height: 185,
        size: 86.5,
        type: TYPES.SOLDAT,
        weapon: WEAPONS.DAGUE,
      },
      {
        id: 7,
        name: 'Dynama',
        height: 133,
        size: 58.3,
        type: TYPES.ARCHER,
        weapon: WEAPONS.ARBALETE,
      },
      {
        id: 8,
        name: 'Dr. IQ',
        height: 178,
        size: 74.0,
        type: TYPES.MAGE,
        weapon: WEAPONS.SCEPTRE,
      },
      {
        id: 9,
        name: 'Magma',
        height: 185,
        size: 80.9,
        type: TYPES.MAGE,
        weapon: WEAPONS.SCEPTRE,
      },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
