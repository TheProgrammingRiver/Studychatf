import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudyRoomService {
  http: any;


  createRoom(room: any): Observable<any> {
    return this.http.post('http://localhost:8080/studyrooms/create', room);
  }
  constructor() { }

  joinRoom(roomId: number, user: any): Observable<any> {
    return this.http.post(`http://localhost:8080/studyrooms/${roomId}/join`, user);
  }
}
