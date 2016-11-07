/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleServiceService } from './people-service.service';

describe('Service: PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleServiceService]
    });
  });

  it('should ...', inject([PeopleServiceService], (service: PeopleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
