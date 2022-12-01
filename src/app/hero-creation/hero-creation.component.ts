import { Component } from '@angular/core';
import { Hero, TYPE } from '../hero';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-creation',
  templateUrl: './hero-creation.component.html',
  styleUrls: ['./hero-creation.component.scss'],
})
export class HeroCreationComponent {
  readonly TYPE = TYPE;

  newHeroForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    type: new FormControl<TYPE | null>(null, Validators.required),
  });

  constructor(private heroService: HeroService, private router: Router) {}

  get nameControl() {
    return this.newHeroForm.controls['name'];
  }

  get typeControl() {
    return this.newHeroForm.controls['type'];
  }

  add(): void {
    this.nameControl.patchValue(this.nameControl.value.trim());
    if (!this.nameControl.value) {
      return;
    }

    this.heroService
      .addHero({
        name: this.nameControl.value,
        type: this.typeControl.value,
      } as Hero)
      .subscribe(() => {
        this.router
          .navigateByUrl('/heroes')
          .then(() => console.log('Navigation succeed'));
      });
  }
}
