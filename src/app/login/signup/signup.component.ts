import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
/* Models */
import { User } from '../../models/user';
/* Service */
import { UserService } from '../../core/user.service';

@Component({
  selector: 'oevents-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  /* Sign up form to be submitted */
  signupForm: FormGroup;
  /* User to be signed up */
  user: User;

  /**
   * Constructor
   * @param fb: form builder
   * @param router: router
   * @param userService: user service to perform the sign up
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
    this.signupForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  /**
   * Method which submites a form
   */
  onSubmit() {
    // Get the signed up user
    this.user = this.signupForm.value;
    // Perform the sign up process
    this.userService.signup(this.user).subscribe((event: Event) => {
      this.router.navigate(['/events']);
    });
  }
}
