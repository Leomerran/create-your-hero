import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero, TYPE } from '../hero';

@Injectable()
export class FormGroupService {
  heroForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    type: new FormControl<TYPE | null>(null, Validators.required),
  });

  get nameControl() {
    return this.heroForm.controls['name'];
  }

  get typeControl() {
    return this.heroForm.controls['type'];
  }

  get hero(): Hero {
    return {
      name: this.nameControl.value,
      type: this.typeControl.value,
    } as Hero;
  }

  fillHeroForm(hero: Hero) {
    this.nameControl.patchValue(hero.name);
    this.typeControl.patchValue(hero.type);
  }
}
