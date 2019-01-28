import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TextboxComponent } from './textbox.component';

@NgModule({
  declarations: [
    TextboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TextboxComponent]
})
export class TextboxModule {

}
