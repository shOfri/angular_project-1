import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLoginWithGoogle]',
})
export class LoginWithGoogleDirective {
  @HostListener('click', ['$event'])
  clickHandle(event: MouseEvent) {
    event.preventDefault();
    this.authService.loginWithGoogle();
  }

  constructor(private authService: AuthService) {}
}
