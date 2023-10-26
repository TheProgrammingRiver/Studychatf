import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudyRoomService {

  private baseUrl = 'http://localhost:8080/studyrooms';

  constructor(private http: HttpClient) { }

  createRoom(room: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, room);
  }

  listAllRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  joinRoom(roomId: number, user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${roomId}/join`, user);
  }

  leaveRoom(roomId: number, user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${roomId}/leave`, user);
  }
}
