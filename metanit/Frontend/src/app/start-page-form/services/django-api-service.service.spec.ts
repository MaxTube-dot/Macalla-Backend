import { TestBed } from '@angular/core/testing';

import { DjangoApiServiceService } from './django-api-service.service';

describe('DjangoApiServiceService', () => {
  let service: DjangoApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjangoApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
