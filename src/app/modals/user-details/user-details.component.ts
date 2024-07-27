import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, ModalController, IonButton, IonButtons, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  standalone: true,
  imports: [IonItem, IonButtons, CommonModule, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, FormsModule, IonButton, IonToolbar, IonHeader, IonTitle, IonRow, IonCol]
})
export class UserDetailsComponent implements OnInit {
  @Input() userinfo: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('userdata===', this.userinfo);

  }
  close() {
    this.modalCtrl.dismiss()
  }
}
