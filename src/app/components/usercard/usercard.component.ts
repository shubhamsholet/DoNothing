import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  ],
})


export class UsercardComponent implements OnInit {

  @Input() userdata: any = {}

  constructor(private routes: Router) { }

  ngOnInit() {
    console.log("userdata==", this.userdata);

  }
  userDetails(userInfo: any) {
    console.log('user details btn clicked');
    this.routes.navigate(['/user-details']);

  }
}
