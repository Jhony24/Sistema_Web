import { TestBed } from '@angular/core/testing';

import { AreaserviceService } from './areaservice.service';

describe('AreaserviceService', () => {
  let service: AreaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
