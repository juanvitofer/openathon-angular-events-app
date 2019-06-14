import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
/* Models */
import { User } from '../models/user';
/* Services */
import { UserService } from '../core/user.service';

@Component({
  selector: 'oevents-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /* Login form to be submitted */
  loginForm: FormGroup;
  /* Message to display when logging */
  msgs: string;

  /**
   * Constructor
   * @param fb: form group
   * @param router: router
   * @param userService: user service to perform the login
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Method which creates a form
   */
  createForm() {
    // Create the form with the fields email and password empties
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  /**
   * Method which submites a form
   */
  onSubmit() {
    // Get the signed up user
    this.userService.login(this.loginForm.value).subscribe((res: any) => {
      // Dispaly the data to login
      console.log(res);
      // Perform the sign up process
      if (res.email) {
        this.router.navigate(['/events']);
      } else {
        this.msgs = res;
      }
    }, err => this.msgs = 'Email not found.')
  }
}
