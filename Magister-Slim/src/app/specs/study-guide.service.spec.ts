import { TestBed } from '@angular/core/testing';

import { StudyGuideService } from '../services/study-guide.service';

describe('StudyGuideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudyGuideService = TestBed.get(StudyGuideService);
    expect(service).toBeTruthy();
  });
});
