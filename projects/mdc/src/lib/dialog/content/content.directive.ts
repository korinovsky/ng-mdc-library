import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[mdcDialogContent]'
})
export class DialogContentDirective {
  constructor(elementRef: ElementRef) {
    (elementRef.nativeElement as Element).classList.add('mdc-dialog__content');
  }
}
