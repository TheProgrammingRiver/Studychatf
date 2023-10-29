import { Component, OnInit } from '@angular/core';
import { StudyRoomService } from '../studyroom.service';
import { StudyRoom } from '../models/study-room.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-study-room-list',
  templateUrl: './study-room-list.component.html',
  styleUrls: ['./study-room-list.component.css']
})
export class StudyRoomListComponent implements OnInit {
  currentUser: any = null;

  newRoom = {
    name: '',
    subject: ''
  };

  rooms: StudyRoom[] = [];
  errorMessage: any;
  studyRooms: any;
  successMessage: any;



  constructor(
    private studyRoomService: StudyRoomService,
    private userService: UserService,
    private router: Router
    ) {
      this.currentUser = this.userService.getCurrentUser();
     }

     ngOnInit() {
      this.currentUser = this.userService.getCurrentUser();
      console.log(this.currentUser);
      this.listAllRooms();
    }

  listAllRooms() {
    this.studyRoomService.listAllRooms().subscribe(
      rooms => {
        this.rooms = rooms;
      },
      error => {
        console.error('Failed to fetch rooms', error);
      }
    );
  }

  createRoom() {
    this.studyRoomService.createRoom(this.newRoom).subscribe(
      (room: unknown) => {
        this.rooms.push(room as StudyRoom);
        this.newRoom = { name: '', subject: '' }; 
      },
      error => {
        console.error('Failed to create room', error);
      }
    );
  }


joinRoom(roomId: number) {
  const currentUser = this.userService.getCurrentUser();
  console.log(currentUser);
  if (!currentUser || !currentUser.username) {
      console.error('User information is not available');
      return;
  }
  this.studyRoomService.joinRoom(roomId, currentUser).subscribe(
      response => {
          console.log('Joined room successfully', response);
          
          this.router.navigate(['/chat-room', roomId]);
      },
      error => {
          console.error('Failed to join room', error);
      }
  );
}


}