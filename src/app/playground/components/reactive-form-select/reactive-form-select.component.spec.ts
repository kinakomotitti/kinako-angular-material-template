import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSelectComponent } from './reactive-form-select.component';

describe('ReactiveFormSelectComponent', () => {
  let component: ReactiveFormSelectComponent;
  let fixture: ComponentFixture<ReactiveFormSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
