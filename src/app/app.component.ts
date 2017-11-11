import { Component, OnInit } from '@angular/core';

import { AngularFireLiteAuth, AngularFireLiteDatabase } from 'angularfire-lite';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(public Auth: AngularFireLiteAuth, public Database: AngularFireLiteDatabase) {}

hello: Observable<any>;

ngOnInit() {
  this.hello = this.Database.read('hello/hello');
}

loginUser() {
  console.log('test');
  this.Auth.login('test@gmail.com', '123456');
}

}
