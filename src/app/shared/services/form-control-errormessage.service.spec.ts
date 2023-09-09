import { TestBed } from '@angular/core/testing';

import { FormControlErrormessageService } from './form-control-errormessage.service';

describe('FormControlErrormessageService', () => {
  let service: FormControlErrormessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlErrormessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
