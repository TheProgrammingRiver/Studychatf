import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  

  private baseUrl = 'http://localhost:8080/users';

  private currentUser: any = null;

constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
  onLoginSuccess(response: any) {
    this.currentUser = (response.data);
    console.log('onLoginSuccess called with:', response);
  }

  getUserDetails(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/username/${username}`);
  }

  listRoomsForUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}/rooms`);
  }
}
