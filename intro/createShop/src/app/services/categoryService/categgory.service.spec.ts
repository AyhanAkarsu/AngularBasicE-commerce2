import { TestBed } from '@angular/core/testing';

import { CateggoryService } from './categgory.service';

describe('CateggoryService', () => {
  let service: CateggoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateggoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
