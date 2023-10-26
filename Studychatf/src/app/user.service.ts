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

  // setCurrentUser(user: any) {
  //   this['currentUserData'] = user;
  //   this.currentUser = user;
  // }

  getCurrentUser() {
    return this.currentUser;
  }

  // onLoginSuccess(response: any) {
  //   this.setCurrentUser(response.user);
  //   this.currentUser = response.user;
  // }
  


  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
  onLoginSuccess(response: any) {
    this.currentUser = (response.data);
    console.log('onLoginSuccess called with:', response);
    // this.setCurrentUser(response.user);
    // this.currentUser = response.user;
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

  setCurrentUser(user: any) {
    this['currentUserData'] = user;
    this.currentUser = user;
    // console.log('setCurrentUser called with:', user);
  }
}
