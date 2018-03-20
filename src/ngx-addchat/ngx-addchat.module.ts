import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ContainerComponent } from './container/container.component';
import { ProviderComponent } from './container/provider.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ContainerComponent, 
    ProviderComponent, 
  ],
  exports: [
    ContainerComponent,
    ProviderComponent
  ]
})
export class NgxAddchatModule { }
