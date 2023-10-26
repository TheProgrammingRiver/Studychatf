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
onLogin() {
throw new Error('Method not implemented.');
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
        console.log('Login successful', response);
        this.successMessage = response.message;
        this.router.navigate(['/rooms']);
      if (this.router) {
        this.router.navigate(['/path-to-navigate']);
      }
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
