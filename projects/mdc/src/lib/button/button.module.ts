import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {ButtonIconDirective} from './icon/icon.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    ButtonIconDirective
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule {
}
