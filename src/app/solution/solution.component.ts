import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.css',
})
export class SolutionComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        password: new FormControl(null, [this.passwordStrength.bind(this)]),
      }),
    });
  }

  passwordStrength(control: FormControl): { [s: string]: boolean } {
    console.log(control.valid);
    return null;
  }
}
