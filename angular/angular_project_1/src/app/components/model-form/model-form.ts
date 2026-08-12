import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-form.html',
  styleUrl: './model-form.css',
})
export class ModelForm {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    /* this.registerForm = new FormGroup({
      firstName: new FormControl('Virat', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('Kohli'),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pincode: new FormControl(),
      }),
    }); */

    this.registerForm = this.fb.group({
      firstName: ['Virat', [Validators.required, Validators.minLength(5)]],
      lastName: ['Kohli'],
      email: [],
      address: this.fb.group({
        street: [],
        city: [],
        pincode: [],
      }),
    });
  }
}
