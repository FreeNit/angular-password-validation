import { Component } from '@angular/core';
import { REG_EXP } from '../helpers/RegExp';
import CustomFormValidation from '../services/CustomFormValidation';
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
    this.passwordStrength = this.customFormValidation.checkPasswordStrength(
      event.target.value
    );

    return this.passwordStrength;
  }
}
