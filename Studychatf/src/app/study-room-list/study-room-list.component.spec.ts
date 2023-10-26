import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRoomListComponent } from './study-room-list.component';

describe('StudyRoomListComponent', () => {
  let component: StudyRoomListComponent;
  let fixture: ComponentFixture<StudyRoomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyRoomListComponent]
    });
    fixture = TestBed.createComponent(StudyRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
