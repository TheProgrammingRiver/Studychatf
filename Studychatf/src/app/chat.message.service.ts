import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8080/studyroom';

  constructor(private http: HttpClient) { }

  sendMessage(roomId: number, message: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${roomId}/messages/send`, message);
  }

  getMessagesForRoom(roomId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${roomId}/messages`);
  }
}
