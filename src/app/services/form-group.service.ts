import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero, HERO_PROPERTY, TYPES, WEAPONS } from '../hero';

@Injectable()
export class FormGroupService {
  heroForm: FormGroup = new FormGroup({
    [HERO_PROPERTY.NAME]: new FormControl<string>('', Validators.required),
    [HERO_PROPERTY.HEIGHT]: new FormControl<number>(0, Validators.required),
    [HERO_PROPERTY.SIZE]: new FormControl<number>(0, Validators.required),
    [HERO_PROPERTY.TYPE]: new FormControl<TYPES | null>(
      null,
      Validators.required
    ),
    [HERO_PROPERTY.WEAPON]: new FormControl<WEAPONS | null>(null),
  });

  get hero(): Hero {
    return {
      [HERO_PROPERTY.NAME]: this.getFormControl(HERO_PROPERTY.NAME).value,
      [HERO_PROPERTY.HEIGHT]: this.getFormControl(HERO_PROPERTY.HEIGHT).value,
      [HERO_PROPERTY.SIZE]: this.getFormControl(HERO_PROPERTY.SIZE).value,
      [HERO_PROPERTY.TYPE]: this.getFormControl(HERO_PROPERTY.TYPE).value,
      [HERO_PROPERTY.WEAPON]: this.getFormControl(HERO_PROPERTY.WEAPON).value,
    } as Hero;
  }

  getFormControl(property: HERO_PROPERTY) {
    return this.heroForm.controls[property];
  }

  fillHeroForm(hero: Hero) {
    this.getFormControl(HERO_PROPERTY.NAME).patchValue(
      hero[HERO_PROPERTY.NAME]
    );
    this.getFormControl(HERO_PROPERTY.HEIGHT).patchValue(
      hero[HERO_PROPERTY.HEIGHT]
    );
    this.getFormControl(HERO_PROPERTY.SIZE).patchValue(
      hero[HERO_PROPERTY.SIZE]
    );
    this.getFormControl(HERO_PROPERTY.TYPE).patchValue(
      hero[HERO_PROPERTY.TYPE]
    );
    this.getFormControl(HERO_PROPERTY.WEAPON).patchValue(
      hero[HERO_PROPERTY.WEAPON]
    );
  }
}
