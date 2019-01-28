import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarComponent } from './car.component';

@NgModule({
  declarations: [
    CarComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CarComponent]
})
export class CarModule { }
