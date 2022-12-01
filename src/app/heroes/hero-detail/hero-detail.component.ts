import { Component, OnInit } from '@angular/core';
import { Hero, TYPE } from '../../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  id: number = -1;
  heroForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    type: new FormControl<TYPE | null>(null, Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  get nameControl() {
    return this.heroForm.controls['name'];
  }

  get typeControl() {
    return this.heroForm.controls['type'];
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(this.id).subscribe((hero) => {
      this.nameControl.patchValue(hero.name);
      this.typeControl.patchValue(hero.type);
    });
  }

  save(): void {
    if (this.heroForm.valid) {
      const hero: Hero = {
        id: this.id,
        name: this.nameControl.value,
        type: this.typeControl.value,
      };
      this.heroService.updateHero(hero).subscribe(() => this.goBack());
    }
  }

  goBack() {
    this.location.back();
  }
}
