import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonButtons, IonToolbar, IonButton, ModalController, IonContent, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonCard } from "@ionic/angular/standalone";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  standalone: true,
  imports: [IonCard, IonInput, CommonModule, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonContent, IonButtons, IonButton, IonHeader, IonToolbar, ReactiveFormsModule],
})
export class ForgetPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private modalController: ModalController
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      // Call your password reset service here
      console.log('Password reset email sent to:', email);
      // Optionally, navigate to a different page
      this.router.navigate(['']);
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
