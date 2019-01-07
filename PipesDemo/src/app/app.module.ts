import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { IteratePipe } from './iterate.pipe';
import { ConvertStatusPipe } from './convert-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    IteratePipe,
    ConvertStatusPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
