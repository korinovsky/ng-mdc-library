import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[mdcDialogFooter]'
})
export class DialogFooterDirective {
  @HostBinding('class.mdc-dialog__actions') footerClass = true;
}
