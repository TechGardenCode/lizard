import { TestBed } from '@angular/core/testing';

import { Lizard } from './lizard';

describe('Lizard', () => {
  let service: Lizard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lizard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
