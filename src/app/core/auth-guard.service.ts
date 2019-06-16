import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
/* Services */
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate  {

  /**
   * Constructor
   * @param router: router
   * @param userService: service to check user
   */
  constructor(
    public router: Router,
    private userService: UserService
  ) {}

  /**
   * Method which indicates when navigate to a route
   */
  canActivate(): boolean {
    return this.checkLogin();
  }

  /**
   * Method which check user login
   */
  checkLogin(): boolean {
    if (this.userService.checkUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
