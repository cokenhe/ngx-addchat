import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAddchatModule } from './ngx-addchat/ngx-addchat.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxAddchatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
