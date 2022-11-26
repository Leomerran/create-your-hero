import { Component } from '@angular/core';
import {Hero, HEROES} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero: Hero | undefined;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
