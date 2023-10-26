import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessageService } from '../chat.message.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  newMessage = {
    text: '',
  };

  messages: ChatMessage[] = [];
  errorMessage: any;

  constructor(
    private chatMessageService: ChatMessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const roomId = this.route.snapshot.params['roomId'];
    this.getMessagesForRoom(roomId);
  }

  getMessagesForRoom(roomId: number) {
    this.chatMessageService.getMessagesForRoom(roomId).subscribe(
      (messages) => {
        this.messages = messages;
      },
      (error) => {
        console.error('Failed to fetch messages', error);
      }
    );
  }

  sendMessage() {
    const roomId = this.route.snapshot.params['roomId'];
    this.chatMessageService.sendMessage(roomId, this.newMessage).subscribe(
      (message: any) => {
        this.messages.push(message);
        this.newMessage = { text: '' };
      },
      (error) => {
        console.error('Failed to send message', error);
      }
    );
  }
}
