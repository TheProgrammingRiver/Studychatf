import { TestBed } from '@angular/core/testing';

import { StudyRoomService } from './studyroom.service';

describe('StudyRoomService', () => {
  let service: StudyRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
