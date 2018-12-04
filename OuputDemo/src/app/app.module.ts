import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { StringoperationComponent } from './stringoperation/stringoperation.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    StringoperationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
