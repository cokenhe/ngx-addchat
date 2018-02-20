import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ContainerComponent } from './container/container.component';
import { ProviderComponent } from './container/provider.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    ContainerComponent, 
    ProviderComponent, 
  ],
  bootstrap: [ContainerComponent]
})
export class NgxAddchatModule { }
