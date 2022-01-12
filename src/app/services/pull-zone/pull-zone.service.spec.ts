import { TestBed } from '@angular/core/testing';

import { PullZoneService } from './pull-zone.service';

describe('PullZoneServiceService', () => {
  let service: PullZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
