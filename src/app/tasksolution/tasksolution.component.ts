import { Component } from '@angular/core';
import { PasswordStrength } from '../helpers/Constants';
import { REG_EXP } from '../helpers/RegExp';
import CustomFormValidation from '../services/PasswordStrengthValidation';
@Component({
  selector: 'app-task-solution',
  templateUrl: './tasksolution.component.html',
  styleUrl: './tasksolution.component.css',
})
export class TasksolutionComponent {
  password: string = '';
  passwordStrength: string = '';

  customFormValidation: CustomFormValidation = new CustomFormValidation();

  passwordStrengthValidator(event: any): string {
    const validationPassword: string = event.target.value.trim();

    const { characters, numbers, symbols } = REG_EXP;

    const hasCharacter = characters.test(validationPassword);
    const hasNumbers = numbers.test(validationPassword);
    const hasSpecials = symbols.test(validationPassword);

    this.passwordStrength = this.customFormValidation.checkPasswordStrength(
      hasCharacter,
      hasNumbers,
      hasSpecials,
      validationPassword
    );

    return this.passwordStrength;
  }
}
