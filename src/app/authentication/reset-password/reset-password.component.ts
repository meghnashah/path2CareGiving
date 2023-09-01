import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '@core';
import { UnsubscribeOnDestroyAdapter } from '@shared';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent   extends UnsubscribeOnDestroyAdapter
implements OnInit    
{
  loginForm!: UntypedFormGroup;
  submitted = false;
  error = '';
  hide = true;
  showIcon1 = true;
  showIcon2 = true;
  toggleIcon1() {
    this.showIcon1 = !this.showIcon1;
  }
  toggleIcon2() {
    this.showIcon2 = !this.showIcon2;
  }
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    super();
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        'admin@lorax.com',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['admin', Validators.required],
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    
    this.error = '';
    if (this.loginForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.subs.sink = this.authService
        .login(this.form['email'].value, this.form['password'].value)
        .subscribe(
          (res) => {
            if (res) {
              const token = this.authService.currentUserValue.token;
              if (token) {
                this.router.navigate(['/dashboard/dashboard-day1']);
              }
            } else {
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
          }
        );
    }
  }   
 
}

