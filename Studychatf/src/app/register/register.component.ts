import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
onRegister() {
throw new Error('Method not implemented.');
}

  user = {
    username: '',
    password: ''
  };
  successMessage: any;
  errorMessage: any;

  constructor(private userService: UserService , private router: Router) { }

  register() {
    this.userService.register(this.user).subscribe(
      (response: any) => {
        console.log('Registration successful', response);
        this.successMessage = response.message;
        this.router.navigate(['/login']);
      if (this.router) {
        this.router.navigate(['/path-to-navigate']);
      }
      },
      error => {
        console.error('Registration failed', error);
        this.errorMessage = 'Registration failed. Please try again.';
      }
    );
  }  
}
