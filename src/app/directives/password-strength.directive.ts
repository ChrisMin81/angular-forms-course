import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {createPasswordStrengthValidator} from "../validators/password-strength.validator";

@Directive({
  selector: '[passwordStrength]',
  providers: [{
    // register directive as formFieldDirective
    provide: NG_VALIDATORS,
    useExisting: PasswordStrengthDirective,
    multi: true
  }]
})
export class PasswordStrengthDirective implements Validator {
  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return createPasswordStrengthValidator()(control);
  }


}
