import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-creation',
  templateUrl: './hero-creation.component.html',
  styleUrls: ['./hero-creation.component.scss'],
})
export class HeroCreationComponent {
  newHero: Hero = {
    id: -1,
    name: '',
  };

  constructor(private heroService: HeroService) {}

  add(): void {
    this.newHero.name = this.newHero.name.trim();
    if (!this.newHero.name) {
      return;
    }
    this.heroService.addHero(this.newHero).subscribe();
  }
}
