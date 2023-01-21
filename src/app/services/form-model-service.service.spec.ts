import { TestBed } from '@angular/core/testing';

import { FormModelServiceService } from './form-model-service.service';

describe('FormModelServiceService', () => {
  let service: FormModelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormModelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
