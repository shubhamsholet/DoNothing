import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class RegisterPage implements OnInit {

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      height: ['', Validators.required],
      languages: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      serviceOption: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() { }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.registrationForm.patchValue({ photo: file });
    }
  }

  onRegister() {
    if (this.registrationForm.valid) {
      console.log('Registration Form Value:', this.registrationForm.value);
      // Handle the form submission logic here
    }
  }
}
