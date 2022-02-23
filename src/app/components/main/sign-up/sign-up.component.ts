import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  registerForm = {
    email: '',
    password: '',
  };

  error = '';

  async onSubmit(formData: NgForm) {
    if (!formData) {
      return;
    }
    this.error = '';

    try {
      const userData = await this.authService.createUser(
        this.registerForm.email,
        this.registerForm.password
      );

      if (userData.user.email != this.authService.user?.email) {
        this.router.navigate(['/login']);
        return;
      }
    } catch (err) {
      this.error = 'User already exists';
    }
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
