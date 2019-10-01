import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogComponent} from './dialog.component';
import {DialogContentDirective} from './content/content.directive';
import {DialogTitleDirective} from './title/title.directive';
import {DialogButtonComponent} from './button/button.component';
import {DialogFooterDirective} from './footer/footer.directive';
import {DialogInitialFocusDirective} from './initial-focus/initial-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DialogComponent,
    DialogContentDirective,
    DialogTitleDirective,
    DialogButtonComponent,
    DialogFooterDirective,
    DialogInitialFocusDirective
  ],
  exports: [
    DialogComponent,
    DialogContentDirective,
    DialogTitleDirective,
    DialogButtonComponent,
    DialogFooterDirective,
    DialogInitialFocusDirective
  ]
})
export class DialogModule {}
