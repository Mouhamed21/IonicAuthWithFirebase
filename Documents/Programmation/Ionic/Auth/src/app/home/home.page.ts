import { Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userId: string;
  mail: string;
  method: any;
  constructor(public  afDB: AngularFireDatabase, public  afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
      } else {
        console.log('connecté: ' + auth.uid);
        this.userId = auth.uid;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
      }
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }
  add() {
    this.afDB.list('User/').push({
      pseudo: 'drissas'
    });
  }

}
