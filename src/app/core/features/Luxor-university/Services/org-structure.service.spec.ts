/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrgStructureService } from './org-structure.service';

describe('Service: OrgStructure', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgStructureService]
    });
  });

  it('should ...', inject([OrgStructureService], (service: OrgStructureService) => {
    expect(service).toBeTruthy();
  }));
});
