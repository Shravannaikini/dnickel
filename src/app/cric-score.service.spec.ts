import { TestBed } from '@angular/core/testing';

import { CricScoreService } from './cric-score.service';

describe('CricScoreService', () => {
  let service: CricScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CricScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
