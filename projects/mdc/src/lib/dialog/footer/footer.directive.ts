import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[mdcDialogFooter]'
})
export class DialogFooterDirective {
  constructor(elementRef: ElementRef) {
    (elementRef.nativeElement as Element).classList.add('mdc-dialog__actions');
  }
}
