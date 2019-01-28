import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CarComponent} from "../car-image/car.component";
import {TextboxComponent} from "../textbox/textbox.component";

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, CarComponent, TextboxComponent]
})
export class AppModule {}
