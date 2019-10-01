import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[mdcDialogTitle]'
})
export class DialogTitleDirective {
  constructor(elementRef: ElementRef) {
    (elementRef.nativeElement as Element).classList.add('mdc-dialog__title');
  }
}
