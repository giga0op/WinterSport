import { TestBed } from '@angular/core/testing';

import { ProductnameService } from './productname.service';

describe('ProductnameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductnameService = TestBed.get(ProductnameService);
    expect(service).toBeTruthy();
  });
});
