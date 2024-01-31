import { TestBed } from '@angular/core/testing';

import { ApiValidatorInterceptor } from './api-validator.interceptor';

describe('ApiValidatorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiValidatorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiValidatorInterceptor = TestBed.inject(ApiValidatorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
