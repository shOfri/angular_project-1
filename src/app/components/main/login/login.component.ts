import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = {
    email: '',
    password: '',
  };
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit({ valid }: NgForm) {
    if (!valid) {
      return;
    }
    this.error = '';
    try {
      await this.authService.login(
        this.loginForm.email,
        this.loginForm.password
      );
      this.router.navigate(['/dashboard']);
    } catch (err) {
      this.error = 'Invalid email or password';
    }
  }

  ngOnInit(): void {}
}
