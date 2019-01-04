import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggingService } from './services/logging.service';
import { ProductComponent } from './product/product.component';
import { ExamComponent } from './exam/exam.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
