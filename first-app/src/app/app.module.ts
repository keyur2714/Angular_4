import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { FailureComponent } from './failure-message.component';
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FailureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("!...App Module Object is  Created...!");
  }
 }
