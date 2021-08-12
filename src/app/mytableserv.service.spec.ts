import { TestBed } from '@angular/core/testing';

import { MytableservService } from './mytableserv.service';

describe('MytableservService', () => {
  let service: MytableservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytableservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
