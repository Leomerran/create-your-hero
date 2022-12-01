import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCreationComponent } from './hero-creation.component';

describe('HeroCreationComponent', () => {
  let component: HeroCreationComponent;
  let fixture: ComponentFixture<HeroCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroCreationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
