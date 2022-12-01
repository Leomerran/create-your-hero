import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
import { FormGroupService } from '../../services/form-group.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  providers: [FormGroupService],
})
export class HeroDetailComponent implements OnInit {
  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private formGroupService: FormGroupService,
    private location: Location
  ) {}

  get nameControl() {
    return this.formGroupService.nameControl;
  }

  get typeControl() {
    return this.formGroupService.typeControl;
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
