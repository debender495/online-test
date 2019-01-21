import { TestBed, inject } from '@angular/core/testing';

import { OnlineTestService } from './online-test.service';

describe('OnlineTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlineTestService]
    });
  });

  it('should be created', inject([OnlineTestService], (service: OnlineTestService) => {
    expect(service).toBeTruthy();
  }));
});
