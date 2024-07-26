import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent} from '@ionic/angular/standalone';
@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss'],
  standalone:true,
  imports:[CommonModule ,IonContent,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent],
})
export class UsercardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
