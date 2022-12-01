import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
import { FormGroupService } from '../../services/form-group.service';
import { HERO_PROPERTY, TYPES, WEAPONS } from '../../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  providers: [FormGroupService],
})
export class HeroDetailComponent implements OnInit {
  id: number | undefined;
  readonly TYPE = TYPES;
  readonly WEAPON = WEAPONS;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private formGroupService: FormGroupService,
    private location: Location
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

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(this.id).subscribe((hero) => {
      this.formGroupService.fillHeroForm(hero);
    });
  }

  save(): void {
    if (this.formGroupService.heroForm.valid && this.id) {
      this.heroService
        .updateHero({ ...this.formGroupService.hero, id: this.id })
        .subscribe(() => this.goBack());
    }
  }

  goBack() {
    this.location.back();
  }
}
