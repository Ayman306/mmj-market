import { JsonPipe, NgClass, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/service/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-jobpost',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, TitleCasePipe, JsonPipe],
  templateUrl: './jobpost.component.html',
  styleUrl: './jobpost.component.scss'
})

export class JobpostComponent {
  postjob: FormGroup;
  logoFile: File | null = null;
  paymentFile: File | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiService, private spinner: NgxSpinnerService,
    private route: Router, private toaster: NgToastService

  ) {

    this.postjob = new FormGroup({
      title: new FormControl('Software Engineer', [Validators.required]),
      company_name: new FormControl('Kafka', [Validators.required]),
      description: new FormControl('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt obcaecati, temporibus porro eveniet sit impedit. Maxime, minima. Consequuntur, id. Error consequatur, est temporibus ducimus natus molestias alias quo voluptate ab!', [Validators.required]),
      responsibility: new FormControl('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt obcaecati, temporibus porro eveniet sit impedit. Maxime, minima. Consequuntur, id. Error consequatur, est temporibus ducimus natus molestias alias quo voluptate ab!', [Validators.required]), // Fixed typo from 'reponsibility'
      qualification: new FormControl('Graduate'),
      employment_type: new FormControl('Full-Time', [Validators.required]),
      salary: new FormControl('10000'),
      number_of_opening: new FormControl('2', [Validators.required]),
      notes: new FormControl('Application notes'),
      apply_url: new FormControl('applyhere.com'),


      primary_contact: new FormControl('9988890977', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]),
      wa_number: new FormControl('9988890977', [
        Validators.pattern('^[0-9]{10}$')
      ]),
      alternative_contact: new FormControl('7788889999', [
        Validators.pattern('^[0-9]{10}$')
      ]),
      email: new FormControl('ayaan@gmail.com', [Validators.required, Validators.email]), // Added email validation
      address: new FormControl('2nd Cross', [Validators.required]),
      city: new FormControl('Mangalore', [Validators.required]),
      state: new FormControl('Karnataka', [Validators.required]),
      pincode: new FormControl('1111111', [Validators.required]),
      web_url: new FormControl('kafka.com'),
      contact_type: this.fb.array([]), // Initialize as an empty array
      logo: new FormControl(null),
      payment: new FormControl(null, [Validators.required])
    });
  }

  onContactTypeChange(event: Event) {
    const contactTypes = this.postjob.get('contact_type') as FormArray;
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (target.checked) {
      // Add value if checked
      if (!contactTypes.value.includes(value)) {
        contactTypes.push(this.fb.control(value));
      }
    } else {
      // Remove value if unchecked
      const index = contactTypes.controls.findIndex(control => control.value === value);
      if (index > -1) {
        contactTypes.removeAt(index);
      }
    }

    // Update validators based on selected contact types
    this.updateContactValidators(contactTypes);
  }


  updateContactValidators(contactTypes: FormArray) {
    const waNumberControl = this.postjob.get('wa_number') as FormControl;
    const emailControl = this.postjob.get('email') as FormControl;
    const primaryContactControl = this.postjob.get('primary_contact') as FormControl;

    // Reset validators
    waNumberControl.clearValidators();
    emailControl.clearValidators();
    primaryContactControl.clearValidators();

    // Set validators based on selected contact types
    if (contactTypes.value.includes('whatsapp')) {
      waNumberControl.setValidators([Validators.required, Validators.pattern('^[0-9]{10}$')]);
    }
    if (contactTypes.value.includes('email')) {
      emailControl.setValidators([Validators.required, Validators.email]);
    }
    if (contactTypes.value.includes('phone')) {
      primaryContactControl.setValidators([Validators.required, Validators.pattern('^[0-9]{10}$')]);
    }

    // Update the controls to reflect the new validators
    waNumberControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
    primaryContactControl.updateValueAndValidity();
  }

  // Handle file selection
  onFileSelect(event: any, field: 'logo' | 'payment'): void {
    const file = event.target.files[0];
    const mimeType = file.type;
    if (/image\/*/.exec(mimeType) == null) {
      this.toaster.danger("The file type is not supported. Please choose an image.")
      return;
    }

    if (file) {
      console.log(file);
      if (field === 'logo') {
        this.logoFile = file;
        this.postjob.patchValue({ logo: file });
      } else if (field === 'payment') {
        this.paymentFile = file;
        this.postjob.patchValue({ payment: file });
      }
    }



    // if (file) {
    //   if (field === 'logo') {
    //     this.logoFile = file;
    //     this.postjob.patchValue({ logo: file });
    //   } else if (field === 'payment') {
    //     this.paymentFile = file;
    //     this.postjob.patchValue({ payment: file });
    //   }
    // }
  }


  onSubmit() {
    if (this.postjob.invalid) {
      // Mark all controls as touched to trigger validation messages
      Object.keys(this.postjob.controls).forEach(field => {
        const control = this.postjob.get(field);
        if (control instanceof FormGroup) {
          Object.keys(control.controls).forEach(subField => {
            control.get(subField)?.markAsTouched();
          });
        } else {
          control?.markAsTouched();
        }
      });

      console.log('Form is invalid', this.postjob);
      return;
    } else {
      const jobValues = this.postjob.value; // Get the form values
      const logoFile: File | null = this.logoFile || null;
      const paymentFile: File | null = this.paymentFile || null;
      console.log(logoFile);

      // const media = [];
      // if (logoFile) {
      //   media.push({ type: 'logo', file: logoFile });
      // }
      // if (paymentFile) {
      //   media.push({ type: 'payment', file: paymentFile });
      // }

      const formData = new FormData();
      formData.append('data', JSON.stringify(jobValues));
      if (logoFile)
        formData.append('logo', logoFile);
      if (paymentFile)
        formData.append('payment', paymentFile);

      console.log(formData);

      // Use type assertion to bypass type checking
      const entries = (formData as any).entries();
      for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
      }
      this.addJobPost(formData);
    }
  }
  addJobPost(jobValues: any) {
    this.spinner.show();
    this.apiService.postJob(jobValues).subscribe({
      next: (res) => {
        console.log(res);
        this.spinner.hide();
        this.toaster.success('Authenticating job post.', 'Job Post Uploaded');
        this.route.navigate(['/jobs']);
      },
      error: (err) => {
        console.log(err);
        this.spinner.hide();
      }
    });
  }
}
