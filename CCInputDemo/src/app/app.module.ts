import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { CustomeGridComponent } from './custome-grid/custome-grid.component';
import { EmployeeLstComponent } from './employee-lst/employee-lst.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    CustomeGridComponent,
    EmployeeLstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
