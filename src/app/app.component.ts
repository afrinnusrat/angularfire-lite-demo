import {Component, OnInit} from '@angular/core';

import {AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore} from 'angularfire-lite';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(public db: AngularFireLiteDatabase,
                public auth: AngularFireLiteAuth,
                public firestore: AngularFireLiteFirestore) {
    }

    databaseData;
    databaseList;
    databaseQuery;

    firestoreData;
    firestoreList;
    firestoreQuery;

    authState;


    ngOnInit() {

        // Realtime Database
        this.db.read('hello/hello').subscribe((data) => {
            this.databaseData = data;
        });


        // Realtime Database list retrieval
        this.databaseList = this.db.read('hello');


        // Realtime Database query
        this.db.query('hello').limitToLast(1).orderByKey().on('value').subscribe((data) => {
            this.databaseQuery = data;
        });

        // Firestore
        this.firestore.read('hello/hellodoc').subscribe((data) => {
            this.firestoreData = data;
        });

        // Firestore  list retrieval
        this.firestoreList = this.firestore.read('hello');

        // Firestore Query
        this.firestore.query('query').limit(1).on().subscribe((data) => {
            this.firestoreQuery = data;
        });

        // Firestore batched writes
        this.firestore.batch()
            .set('batchCollection/batchDoc', {set: 'this is a batch set'})
            .update('batchCollection/batchDoc', {update: 'this is a batch update'})
            .commit()
            .subscribe(() => {
                console.log('batched writes complete');
            });

        // Firestore transaction
        this.firestore.transaction().get('hello/hellodoc').subscribe((payload1) => {
            console.log(payload1.data);
            payload1.next.get('batchHello/batchDoc').subscribe((payload2) => {
                console.log(payload2.data);
                payload2.next
                    .set('transaction/tranDoc', {hellofromTrans: 'this is a set from the transaction'})
                    .run()
                    .subscribe(() => console.log('transaction complete'));
            });
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


