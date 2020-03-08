import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData = {
    email: '',
    password: ''
  };
  connected: boolean;
  constructor(public toastController: ToastController,
              public afAuth: AngularFireAuth) {
              this.afAuth.authState.subscribe(auth => {
                if (!auth) {
                  console.log('non connecté');
                  this.connected = false;
                } else {
                  console.log('connecté:' + auth.uid);
                  this.connected = true;
                }

              });
  }

  ngOnInit() {
  }
  async errorMail() {
    const toast = await this.toastController.create({
      message: 'Email ou mot de passe incorrect',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
        .then(auth => {
          console.log('utilisateur connecté');
        })
        .catch(err => {
          console.log('Erreur: ' + err);
          this.errorMail();
        });
  }
  signup() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.loginData.email, this.loginData.password)
        .then(auth => {
          console.log('utilisateur connecté');
        })
        .catch(err => {
          console.log('Erreur: ' + err);
          this.errorMail();
        });
  }
}
