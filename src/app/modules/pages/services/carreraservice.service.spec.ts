import { TestBed } from '@angular/core/testing';

import { CarreraserviceService } from './carreraservice.service';

describe('CarreraserviceService', () => {
  let service: CarreraserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarreraserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
