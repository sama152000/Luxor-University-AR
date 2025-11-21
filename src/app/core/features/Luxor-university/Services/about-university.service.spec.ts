/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AboutUniversityService } from './about-university.service';

describe('Service: AboutUniversity', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutUniversityService]
    });
  });

  it('should ...', inject([AboutUniversityService], (service: AboutUniversityService) => {
    expect(service).toBeTruthy();
  }));
});
