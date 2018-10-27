import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { FailureComponent } from './failure-message.component';
import { CaclComponent } from './cacl/cacl.component';
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FailureComponent,
    CaclComponent
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
