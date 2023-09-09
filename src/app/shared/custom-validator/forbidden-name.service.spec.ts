import { TestBed } from '@angular/core/testing';

import { ForbiddenNameService } from './forbidden-name.service';

describe('ForbiddenNameService', () => {
  let service: ForbiddenNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForbiddenNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
