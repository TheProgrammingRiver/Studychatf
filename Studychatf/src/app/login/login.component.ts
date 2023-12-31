import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  successMessage: any;
  errorMessage!: string;
  onLogin() {
    this.userService.login(this.user).subscribe(
        response => {
            this.userService.onLoginSuccess(response);
            
            this.router.navigate(['/rooms']);
        },
        error => {
            this.errorMessage = 'Invalid username or password';
        }
    );
}


  credentials = {
    username: '',
    password: ''
  };
user: any;

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.credentials).subscribe(
      (response: any) => {
        this.userService.setCurrentUser(response.user);
        console.log('Login successful', response);
        console.log(response);
        this.userService.onLoginSuccess(response);
        this.successMessage = response.message;
        this.router.navigate(['/rooms']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
  
}