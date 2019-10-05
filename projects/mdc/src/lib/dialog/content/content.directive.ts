import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[mdcDialogContent]'
})
export class DialogContentDirective {
  constructor(private elementRef: ElementRef) {
    this.nativeElement.classList.add('mdc-dialog__content');
  }

  get nativeElement() {
    return this.elementRef.nativeElement as HTMLElement;
  }
}
