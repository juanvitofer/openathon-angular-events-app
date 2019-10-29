import { Component, OnInit } from '@angular/core';
/* Services */
import { UserService } from '../core/user.service';
/* Models */
import { User } from '../models/user';

@Component({
  selector: 'oevents-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  /* Logged user */
  user: User;

  /**
   * Constructor
   * @param userService: user service to get the logged user
   */
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  /**
   * Method which gets the logged user
   */
  getUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
