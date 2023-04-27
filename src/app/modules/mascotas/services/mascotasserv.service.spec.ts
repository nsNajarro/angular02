import { TestBed } from '@angular/core/testing';

import { MascotasservService } from './mascotasserv.service';

describe('MascotasservService', () => {
  let service: MascotasservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotasservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
