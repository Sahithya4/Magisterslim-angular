import { TestBed } from '@angular/core/testing';

import { UnitService } from '../services/unit.service';

describe('UnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitService = TestBed.get(UnitService);
    expect(service).toBeTruthy();
  });
});
