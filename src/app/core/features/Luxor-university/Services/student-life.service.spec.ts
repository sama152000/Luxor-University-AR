/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentLifeService } from './student-life.service';

describe('Service: StudentLife', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentLifeService]
    });
  });

  it('should ...', inject([StudentLifeService], (service: StudentLifeService) => {
    expect(service).toBeTruthy();
  }));
});
