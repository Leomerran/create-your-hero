import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero, TYPE } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
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
