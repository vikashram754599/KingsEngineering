import { TestBed } from '@angular/core/testing';

import { HttpsServicesService } from './https-services.service';

describe('HttpsServicesService', () => {
  let service: HttpsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
