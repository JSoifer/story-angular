import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryDisplayComponent } from './story-display/story-display.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(masterFirebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
