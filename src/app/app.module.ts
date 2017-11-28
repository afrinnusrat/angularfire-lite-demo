import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireLite } from 'angularfire-lite';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireLite.forRoot(environment.config),
    BrowserModule.withServerTransition({appId: 'angularfire-lite-demo'}),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




