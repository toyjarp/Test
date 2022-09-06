import { TestBed } from '@angular/core/testing';

import { FeatchDataService } from './featch-data.service';

describe('FeatchDataService', () => {
  let service: FeatchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
