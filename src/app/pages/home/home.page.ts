import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { UsercardComponent } from 'src/app/components/usercard/usercard.component';
import { LoginComponent } from 'src/app/modals/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, UsercardComponent, LoginComponent]
})
export class HomePage implements OnInit {

  userslist: any = [
    { name: 'user1', age: '22', height: '5.1', rating: '4.1', email: 'user1@gmail', language: 'English,hindi', phone: '111', userPhoto: '../../../assets/images/user1.jpg' },

    { name: 'user2', age: '24', height: '5.2', rating: '4.2', email: 'user2@gmail', language: 'hindi,haryanvi', phone: '2', userPhoto: '../../../assets/images/user2.jpg' },

    { name: 'user3', age: '26', height: '5.3', rating: '4.3', email: 'user3@gmail', language: 'English,hindi,haryanvi', phone: '3', userPhoto: '../../../assets/images/user3.jpg' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
