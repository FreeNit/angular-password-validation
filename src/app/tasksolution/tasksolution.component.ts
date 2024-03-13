import { Component } from '@angular/core';

enum PasswordStrength {
  Empty = 'EMPTY',
  NotApplicable = 'NOT_APPLICABLE',
  Easy = 'EASY',
  Medium = 'MEDIUM',
  Strong = 'STRONG',
}

@Component({
  selector: 'app-task-solution',
  templateUrl: './tasksolution.component.html',
  styleUrl: './tasksolution.component.css',
})
export class TasksolutionComponent {
  password: string = '';
  passwordStrength: string = '';

  passwordStrengthValidator(event: any): string {
    const validationPassword: string = event.target.value.trim();
    console.log(validationPassword);

    const CHARACTER_REGEX = /[A-Za-z]/g;
    const hasCharacter = CHARACTER_REGEX.test(validationPassword);

    const NUMBS_REGEX = /\d/;
    const hasNumbers = NUMBS_REGEX.test(validationPassword);

    const SPECIALS_REGEX = /[^A-Za-z0-9]/;
    const hasSpecials = SPECIALS_REGEX.test(validationPassword);

    if (!validationPassword) {
      this.passwordStrength = PasswordStrength.Empty;
      return;
    }

    if (validationPassword.length < 8) {
      this.passwordStrength = PasswordStrength.NotApplicable;
      return;
    }

    // -> EASY password strength
    if (hasCharacter || hasNumbers || hasSpecials) {
      this.passwordStrength = PasswordStrength.Easy;
    }

    // -> MEDIUM password strength
    const checks: Boolean[] = [hasNumbers, hasCharacter, hasSpecials];
    const checksLength = checks.length;
    for (let i = 0; i < checksLength; i++) {
      for (let j = i + 1; j < checksLength; j++) {
        console.log(checks[i] + ', ' + checks[j]);
        if (checks[i] && checks[j])
          this.passwordStrength = PasswordStrength.Medium;
      }
    }

    // -> STRONG password strength
    if (
      validationPassword.length >= 8 &&
      hasCharacter &&
      hasNumbers &&
      hasSpecials
    ) {
      this.passwordStrength = PasswordStrength.Strong;
    }

    console.log(hasCharacter);

    return this.passwordStrength;
  }
}
