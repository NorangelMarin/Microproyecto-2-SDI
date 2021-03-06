import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private googleAuth: AngularFireAuth) { }


  async loginWithGoogle(): Promise<firebase.UserInfo> {
    try {
      return this.googleAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch (error) {
      console.log(error);
    }
  }
}
