import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
// Form 1
register?: UntypedFormGroup;
hide = true;
// Form 2
secondForm?: UntypedFormGroup;
hide2 = true;
// Form 3
thirdForm?: UntypedFormGroup;
hide3 = true;
isDiv1Visible = true;
isDiv2Visible = false;

toggleDivs() {
  this.isDiv1Visible = !this.isDiv1Visible;
  this.isDiv2Visible = !this.isDiv2Visible;
}

breadscrums = [
  {
    title: 'Examples',
    items: ['Forms'],
    active: 'Examples',
  },
];
constructor(private fb: UntypedFormBuilder) {
  this.initForm(); 
}
initForm() {
  this.register = this.fb.group({
    first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    last: [''],
    password: ['', [Validators.required]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(5)],
    ],
    address: [''],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    country: ['', [Validators.required]],
    termcondition: [false, [Validators.requiredTrue]],
  });
}
 
onRegister() {
  console.log('Form Value', this.register?.value);
}
 
 
}
