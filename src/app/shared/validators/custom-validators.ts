import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidators {
  //  Required with automatic Validators.required included
  static requiredText(): ValidatorFn[] {
    return [Validators.required, Validators.pattern(/\S+/)]; // no blank spaces only
  }

  ///  for text withspaces 
static requiredTrimmed(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value == null) return { required: true };

    const trimmed = control.value.toString().trim();

    // 🔹 Update the value to trimmed version
    if (control.value !== trimmed) {
      control.setValue(trimmed, { emitEvent: false }); 
    }

    return trimmed ? null : { required: true };
  };
}


static requiredTrimmedAndSingleSpace(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value == null) return { required: true };

    // 🔹 Trim and also collapse multiple spaces inside
    const trimmed = control.value.toString().trim().replace(/\s+/g, ' ');

    if (control.value !== trimmed) {
      control.setValue(trimmed, { emitEvent: false });
    }

    return trimmed ? null : { required: true };
  };
}


  // ✅ Email (with required)
  static isemailvalid(): ValidatorFn[] {
    return [Validators.required, Validators.email];
  }

  // ✅ Password strength: min 6, one upper, one lower, one digit, one special char
  static isvalidpassword(): ValidatorFn[] {
    return [
      // Validators.required,
      Validators.minLength(6),
      (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) return null;

        const hasUpper = /[A-Z]/.test(value);
        const hasLower = /[a-z]/.test(value);
        const hasDigit = /[0-9]/.test(value);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        return hasUpper && hasLower && hasDigit && hasSpecial
          ? null
          : { passwordStrength: true };
      }
    ];
  }

  // ✅ Phone number: exactly 10 digits
  static phone(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/)
    ];
  }

  // ✅ Date (required)
  static date(): ValidatorFn[] {
    return [Validators.required];
  }
}
