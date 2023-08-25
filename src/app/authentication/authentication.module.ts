import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
 
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { Page404Component } from './page404/page404.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LockedComponent } from './locked/locked.component';
import { Page500Component } from './page500/page500.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
 

@NgModule({
  declarations: [
    Page500Component,
    Page404Component,
    SigninComponent,
    SignupComponent,
    LockedComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    SharedModule,
  ],
})
export class AuthenticationModule {}
