import { TestBed } from '@angular/core/testing';

import { AyncSampleService } from './aync-sample.service';

describe('AyncSampleService', () => {
  let service: AyncSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyncSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
