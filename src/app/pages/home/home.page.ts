import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { UsercardComponent } from 'src/app/components/usercard/usercard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, UsercardComponent]
})
export class HomePage implements OnInit {

  userslist: any = [
    { name: 'user1', age: '22', height: '5.1', rating: '4.1', email: 'user1@gmail', phone: '111', userPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png' },

    { name: 'user2', age: '24', height: '5.2', rating: '4.2', email: 'user2@gmail', phone: '2', userPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_3.svg.png' },

    { name: 'user3', age: '26', height: '5.3', rating: '4.3', email: 'user3@gmail', phone: '3', userPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
