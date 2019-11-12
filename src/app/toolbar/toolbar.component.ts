import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
/* IMport RxJS Library */
import { SubscriptionLike } from 'rxjs';
/* Import Store by ngrx */
import { select, Store } from '@ngrx/store';
/* Models */
import { User } from '../models/user';
/* Services*/
import { UserService } from '../core/user.service';
/* Login Actions */
import * as login from '../store/login/login.actions';


@Component({
  selector: 'oevents-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnDestroy  {
  /* Logged user */
  user: User;
  /* Property to indicate if the user is authenticated */
  isAuthenticated: boolean;
  /* Property to  indicate the subscription login state */
  subscriptionLogin: SubscriptionLike;

  /**
   * Constructor
   * @param router: router
   * @param userService: user service to check logged user
   * @param store: Store
   */
  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<any>
  ) {
    this.subscriptionLogin = store.pipe(select('login')).subscribe(state => {
      // Check Stae
      if (state) {
        this.isAuthenticated = state.logged;
        // Check Authentication User
        if (this.isAuthenticated) {
          this.user = JSON.parse(localStorage.getItem('user'));
        }
      }
    });
  }

  /**
   * Method to logout the user
   */
  logout() {
    // Perform the logout
    this.userService.logout();
    // Dispatch the logged action to false payload
    this.store.dispatch(new login.Logged(false));
    // Navigate to the home page
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.subscriptionLogin.unsubscribe();
  }
}
