import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, ModalController
} from '@ionic/angular/standalone';
import { UserDetailsComponent } from 'src/app/modals/user-details/user-details.component';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, FormsModule,
  ],
})


export class UsercardComponent implements OnInit {

  @Input() userdata: any = {}

  constructor(private routes: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log("userdata==", this.userdata);

  }



  async userDetails(userdata: any) {
    console.log('user details btn clicked');
    const modal = await this.modalCtrl.create({
      component: UserDetailsComponent,
      cssClass: "userdetilComponent",
      componentProps: { userinfo: userdata }
    });

    modal.present();


  }

}
