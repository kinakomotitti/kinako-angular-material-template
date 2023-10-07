import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KSelect2Component } from './k-select2.component';

describe('KSelect2Component', () => {
  let component: KSelect2Component;
  let fixture: ComponentFixture<KSelect2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KSelect2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
