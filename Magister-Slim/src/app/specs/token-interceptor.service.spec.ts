import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from '../services/token-interceptor.service';
import { Injector } from '@angular/core';
import { OfferingComponent } from '../typescripts/offering.component';

describe('TokenInterceptorService', () => {
  let injector;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [  { provide: Injector, useValue: injector },{provide:OfferingComponent} ]
  }));

  it('should be created', () => {
    const service: TokenInterceptorService = TestBed.get(TokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
