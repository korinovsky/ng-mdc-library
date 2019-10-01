import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[mdcDialogTitle]'
})
export class DialogTitleDirective {
  @HostBinding('class.mdc-dialog__title') titleClass = true;
}
