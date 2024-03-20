import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import CustomFormValidation from '../services/CustomFormValidation';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.css',
})
export class SolutionComponent implements OnInit {
  customFormFieldValidation = new CustomFormValidation();
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
    });
  }

  get passwordFormField() {
    return this.signupForm.get('password');
  }

  get passwordStrength() {
    return this.customFormFieldValidation.checkPasswordStrength(
      this.signupForm.get('password').value
    );
  }
}
