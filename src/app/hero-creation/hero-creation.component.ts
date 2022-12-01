import { Component } from '@angular/core';
import { HERO_PROPERTY, TYPES, WEAPONS } from '../hero';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';
import { FormGroupService } from '../services/form-group.service';

@Component({
  selector: 'app-hero-creation',
  templateUrl: './hero-creation.component.html',
  styleUrls: ['./hero-creation.component.scss'],
  providers: [FormGroupService],
})
export class HeroCreationComponent {
  readonly TYPE = TYPES;
  readonly WEAPON = WEAPONS;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private formGroupService: FormGroupService
  ) {}

  get nameControl() {
    return this.formGroupService.getFormControl(HERO_PROPERTY.NAME);
  }

  get heightControl() {
    return this.formGroupService.getFormControl(HERO_PROPERTY.HEIGHT);
  }

  get sizeControl() {
    return this.formGroupService.getFormControl(HERO_PROPERTY.SIZE);
  }

  get typeControl() {
    return this.formGroupService.getFormControl(HERO_PROPERTY.TYPE);
  }

  get weaponControl() {
    return this.formGroupService.getFormControl(HERO_PROPERTY.WEAPON);
  }

  get heroForm() {
    return this.formGroupService.heroForm;
  }

  add(): void {
    this.nameControl.patchValue(this.nameControl.value.trim());
    if (!this.nameControl.value) {
      return;
    }

    this.heroService.addHero(this.formGroupService.hero).subscribe(() => {
      this.router
        .navigateByUrl('/heroes')
        .then(() => console.log('Navigation succeed'));
    });
  }
}
