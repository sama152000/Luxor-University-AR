/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PresidentMessageService } from './president-message.service';

describe('Service: PresidentMessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresidentMessageService]
    });
  });

  it('should ...', inject([PresidentMessageService], (service: PresidentMessageService) => {
    expect(service).toBeTruthy();
  }));
});
