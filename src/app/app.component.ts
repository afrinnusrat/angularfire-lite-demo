import { Component, OnDestroy, OnInit } from '@angular/core';

import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(public db: AngularFireLiteDatabase,
              public auth: AngularFireLiteAuth,
              public store: AngularFireLiteFirestore) {
  }

  database;
  databaseData;
  databaseSub;

  firestore;
  firestoreData;
  firestoreSub;

  authState;
  authStateSub;


  ngOnInit() {

    // Realtime Database
    this.database = this.db.read('hello/hello');
    this.databaseSub = this.database.subscribe((data) => {
      this.databaseData = data;
    });

    // Firestore
    this.firestore = this.store.read('hello/hellodoc');
    this.firestore.subscribe((data) => {
      this.firestoreData = data;
    });

    // Authentication
    this.authStateSub = this.auth.isAuthenticated().subscribe((isAuth) => {
      this.authState = isAuth;
    });


  }

  // Login Button Clicked
  login() {
    this.auth.signin('test@gmail.com', '123456');
  }


  ngOnDestroy() {
    this.databaseSub.unsubscribe();
    this.firestoreSub.unsubscribe();
    this.authStateSub.unsubscribe();
  }


}


