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
    startWith(0), 
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
            sender: this.currentUser, 
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