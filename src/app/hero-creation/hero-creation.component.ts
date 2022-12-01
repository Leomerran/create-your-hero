import { Component } from '@angular/core';
import { TYPE } from '../hero';
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
  readonly TYPE = TYPE;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private formGroupService: FormGroupService
  ) {}

  get nameControl() {
    return this.formGroupService.nameControl;
  }

  get typeControl() {
    return this.formGroupService.typeControl;
  }

  get heroForm() {
    return this.formGroupService.heroForm;
  }

  add(): void {
    this.formGroupService.nameControl.patchValue(
      this.formGroupService.nameControl.value.trim()
    );
    if (!this.formGroupService.nameControl.value) {
      return;
    }

    this.heroService.addHero(this.formGroupService.hero).subscribe(() => {
      this.router
        .navigateByUrl('/heroes')
        .then(() => console.log('Navigation succeed'));
    });
  }
}
