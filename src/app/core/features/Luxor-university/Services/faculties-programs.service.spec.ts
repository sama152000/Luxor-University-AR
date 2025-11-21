/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacultiesProgramsService } from './faculties-programs.service';

describe('Service: FacultiesPrograms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultiesProgramsService]
    });
  });

  it('should ...', inject([FacultiesProgramsService], (service: FacultiesProgramsService) => {
    expect(service).toBeTruthy();
  }));
});
