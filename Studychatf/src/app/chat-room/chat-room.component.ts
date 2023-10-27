// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ChatMessageService } from '../chat.message.service';
// import { ChatMessage } from '../models/chat-message.model';
// @Component({
//   selector: 'app-chat-room',
//   templateUrl: './chat-room.component.html',
//   styleUrls: ['./chat-room.component.css'],
// })
// export class ChatRoomComponent implements OnInit {
//   newMessage = {
//     text: '',
//     timestamp: '',
//   };
//   messages: ChatMessage[] = [];
//   errorMessage: any;
//   constructor(
//     private chatMessageService: ChatMessageService,
//     private route: ActivatedRoute
//   ) {}
//   ngOnInit() {
//     const roomId = this.route.snapshot.params['roomId'];
//     this.getMessagesForRoom(roomId);
//   }
//   getMessagesForRoom(roomId: number) {
//     this.chatMessageService.getMessagesForRoom(roomId).subscribe(
//       (messages) => {
//         this.messages = messages;
//       },
//       (error) => {
//         console.error('Failed to fetch messages', error);
//       }
//     );
//   }
//   sendMessage() {
//     const roomId = this.route.snapshot.params['roomId'];
//     this.chatMessageService.sendMessage(roomId, this.newMessage).subscribe(
//       (message: any) => {
//         this.messages.push(message);
//         this.newMessage = { text: '', timestamp: '' };
//       },
//       (error) => {
//         console.error('Failed to send message', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessageService } from '../chat.message.service';
import { UserService } from '../user.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  roomId: number = 0;
  messages: any[] = [];
  newMessage: string = '';
  currentUser: any;
  constructor(
    private chatMessageService: ChatMessageService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.roomId = +params['roomId'];
      this.loadMessages();
    });
  }
  // ngOnInit(): void {
  //   this.currentUser = this.userService.getCurrentUser();
  // }
  ngOnInit() {
    this.roomId = +this.route.snapshot.params['roomId'];
    this.chatMessageService.getMessagesForRoom(this.roomId).subscribe(
      messages => {
        this.messages = messages;
      },
      error => {
        console.error('Failed to fetch messages', error);
      }
    );

  this.currentUser = this.userService.getCurrentUser();
  console.log('Fetched Current User:', this.currentUser);

  interval(5000).pipe(
    startWith(0), // to immediately get the messages without waiting for the first interval
    switchMap(() => this.chatMessageService.getMessagesForRoom(this.roomId))
).subscribe(
    messages => {
        this.messages = messages;
    },
    error => {
        console.error('Failed to fetch messages', error);
    }
);
  }


    
  loadMessages() {
    this.chatMessageService.getMessagesForRoom(this.roomId).subscribe(
      messages => {
        this.messages = messages.filter((msg: { sender: { username: any; }; }) => msg && msg.sender && msg.sender.username);
      }
    );
  }
  
  
  sendMessage() {
    if(this.currentUser?.username) {
        const messageData = {
            content: this.newMessage,
            sender: this.currentUser, // send the whole user object
            roomId: this.roomId
        };
        this.chatMessageService.sendMessage(this.roomId, messageData).subscribe(
            response => {
                this.messages.push(response);
                this.newMessage = '';
            },
            error => {
                console.error('Error sending message:', error);
            }
        );
    }
}
}