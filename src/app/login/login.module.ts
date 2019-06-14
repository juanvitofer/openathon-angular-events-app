import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Modules */
import { SharedModule } from '../shared/shared.module';
/* Components */
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoginModule { }
