import { Component } from '@angular/core';
/* Import Store by ngrx */
import { Store } from '@ngrx/store';
/* Import Login Actions */
import * as login from './store/login/login.actions';
/* Services */
import { UserService } from './core/user.service';

@Component({
  selector: 'oevents-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* App Title */
  title = 'open-events-front';

  /**
   * Constructor
   * @param userService User Service
   * @param store: Store
   */
  constructor(
    private userService: UserService,
    private store: Store<any>
  ) {
    this.userService.checkUser() ? this.store.dispatch(new login.Logged(true)) : this.store.dispatch(new login.Logged(false))
   }
}
