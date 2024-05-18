import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.scss'
})
export class EnquiryFormComponent {
  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
          email: ['', [ Validators.email]],
          businessName: [''],
          message: ['', [Validators.required, Validators.minLength(10)]]
        });
  }
  enquiryForm: FormGroup;


 get f() {
    return this.enquiryForm.controls;
  }

  onSubmit() {
    if (this.enquiryForm.valid) {
      console.log(this.enquiryForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
