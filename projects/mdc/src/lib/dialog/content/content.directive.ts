import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[mdcDialogContent]'
})
export class DialogContentDirective {
  @HostBinding('class.mdc-dialog__content') contentClass = true;
}
