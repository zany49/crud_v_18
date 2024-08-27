import { TestBed } from '@angular/core/testing';

import { CustomerTODOService } from './customer-todo.service';

describe('CustomerTODOService', () => {
  let service: CustomerTODOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTODOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
