import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AngularFireLite} from 'angularfire-lite';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireLite.forRoot({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: ''
    }),
    BrowserModule.withServerTransition({appId: 'angularfire-lite-demo'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.warn('Please add your own Firebase project configuration in app.module.ts');
  }
}

