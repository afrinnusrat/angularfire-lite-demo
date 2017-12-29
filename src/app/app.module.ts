import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireLite } from 'angularfire-lite';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AngularFireLite.forRoot(environment.config),
        BrowserModule.withServerTransition({appId: 'angularfire-lite-demo'}),
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }




