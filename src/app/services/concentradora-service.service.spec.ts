import { TestBed } from '@angular/core/testing';

import { ConcentradoraServiceService } from './concentradora-service.service';

describe('ConcentradoraServiceService', () => {
  let service: ConcentradoraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcentradoraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
