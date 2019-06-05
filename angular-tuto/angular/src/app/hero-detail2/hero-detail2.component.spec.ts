import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetail2Component } from './hero-detail2.component';

describe('HeroDetail2Component', () => {
  let component: HeroDetail2Component;
  let fixture: ComponentFixture<HeroDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
