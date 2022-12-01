import { Component } from '@angular/core';
import { Hero, TYPE } from '../hero';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-creation',
  templateUrl: './hero-creation.component.html',
  styleUrls: ['./hero-creation.component.scss'],
})
export class HeroCreationComponent {
  readonly TYPE = TYPE;
  newHeroName = '';
  newHeroType = this.TYPE.SOLDAT;

  constructor(private heroService: HeroService, private router: Router) {}

  add(): void {
    this.newHeroName = this.newHeroName.trim();
    if (!this.newHeroName) {
      return;
    }
    this.heroService
      .addHero({ name: this.newHeroName, type: this.newHeroType } as Hero)
      .subscribe(() => {
        this.router
          .navigateByUrl('/heroes')
          .then(() => console.log('Navigation succeed'));
      });
  }
}
