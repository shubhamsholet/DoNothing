import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonSelectOption, IonCol, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonSelectOption]
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


  ngOnInit() {
  }

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
