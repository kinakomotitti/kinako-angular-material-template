import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormsSampleComponent } from './input-forms-sample.component';

describe('InputFormsSampleComponent', () => {
  let component: InputFormsSampleComponent;
  let fixture: ComponentFixture<InputFormsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormsSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
