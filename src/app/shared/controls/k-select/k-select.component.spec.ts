import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KSelectComponent } from './k-select.component';

describe('KSelectComponent', () => {
  let component: KSelectComponent;
  let fixture: ComponentFixture<KSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
