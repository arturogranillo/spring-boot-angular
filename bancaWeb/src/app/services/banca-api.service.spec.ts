import { TestBed } from '@angular/core/testing';

import { BancaApiService } from './banca-api.service';

describe('BancaApiService', () => {
  let service: BancaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
