import { TestBed } from '@angular/core/testing';

import { NgCronService } from './ng-cron.service';

describe('NgCronService', () => {
  let service: NgCronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
