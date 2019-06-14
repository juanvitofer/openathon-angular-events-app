import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
/* Models */
import { User } from '../models/user';
/* Services*/
import { UserService } from '../core/user.service';


@Component({
  selector: 'oevents-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements DoCheck  {
  /* Logged user */
  user: User;
  /* Property to indicate if the user is authenticated */
  isAuthenticated: boolean;

  /**
   * Constructor
   * @param router: router
   * @param userService: user service to check logged user
   */
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngDoCheck() {
    this.checkUser();
  }

  /**
   * Method to check logged user
   */
  checkUser() {
    // Know if user is authenticated
    this.isAuthenticated = this.userService.checkUser();
    // Get user if he is authenticated
    if (this.isAuthenticated) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  /**
   * Method to logout the user
   */
  logout() {
    // Perform the logout
    this.userService.logout();
    // Change the autentication state
    this.isAuthenticated = false;
    // Navigate to the home page
    this.router.navigate(['/home']);
  }
}
