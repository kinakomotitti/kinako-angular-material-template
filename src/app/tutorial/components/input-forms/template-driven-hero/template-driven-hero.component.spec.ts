import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenHeroComponent } from './template-driven-hero.component';

describe('TemplateDrivenHeroComponent', () => {
  let component: TemplateDrivenHeroComponent;
  let fixture: ComponentFixture<TemplateDrivenHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
