import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './ngx-addchat/container/container.component';
import { ProviderComponent } from './ngx-addchat/container/provider.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
