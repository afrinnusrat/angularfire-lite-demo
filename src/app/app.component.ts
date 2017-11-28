import { Component, OnInit } from '@angular/core';

import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(public db: AngularFireLiteDatabase,
              public auth: AngularFireLiteAuth,
              public store: AngularFireLiteFirestore) {
  }

  database;
  databaseData;


  firestore;
  firestoreData;

  authState;


  ngOnInit() {

    // Realtime Database
    this.database = this.db.read('hello/hello');
    this.database.subscribe((data) => {
      this.databaseData = data;
    });

    // Firestore
    this.firestore = this.store.read('hello/hellodoc');
    this.firestore.subscribe((data) => {
      this.firestoreData = data;
    });

    // Authentication
    this.auth.isAuthenticated().subscribe((isAuth) => {
      this.authState = isAuth;
    });


  }

  // Login Button Clicked
  login() {
    this.auth.signin('test@gmail.com', '123456');
  }


}


