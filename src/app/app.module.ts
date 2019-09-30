import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonModule} from '@mdc/button/button.module';
import {ButtonType, MDC_DEFAULT_BUTTON_TYPE} from '@mdc/button/button.component';

@NgModule({
  imports: [
    BrowserModule,
    ButtonModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: MDC_DEFAULT_BUTTON_TYPE, useValue: ButtonType.Unelevated}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
