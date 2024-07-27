import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonButton, IonIcon, ModalController } from "@ionic/angular/standalone";
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonInput, IonLabel, IonItem, IonTitle, IonToolbar, IonContent, IonHeader, CommonModule, FormsModule],
})
export class LoginComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() { }

  onLogin() {
    // Implement your login logic here
    console.log('Login with', this.email, this.password);
  }

  async onforgetpassword() {

    const modal = await this.modalCtrl.create({
      component: ForgetPasswordComponent,
      cssClass: 'forgetPasswordComponent'
    });

    modal.present();

  }
  onRegister() {
    this.router.navigate(['/register']);
  }

  onLoginWithGoogle() {
    // Implement your Google login logic here
    console.log('Login with Google');
  }
}
