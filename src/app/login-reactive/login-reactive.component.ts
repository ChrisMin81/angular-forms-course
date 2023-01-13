import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {PasswordStrengthDirective} from "../directives/password-strength.directive";
import {createPasswordStrengthValidator} from "../validators/password-strength.validator";


@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  form = this.fb.group({
    email: ['', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
      asyncValidators: []
    }],
    password: ['', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()], []],
  })

  logLogin() {
    const formValue = this.form.value

  }

  constructor(private fb: NonNullableFormBuilder) {
  }

  ngOnInit() {

  }

  get email() {
    return this.form.controls['email']
  }

  get password() {
    return this.form.controls['password']
  }

  reset() {
    this.form.reset()
    console.log(this.form.value)
  }
}
