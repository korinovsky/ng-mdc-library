import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[mdcDialogTitle]'
})
export class DialogTitleDirective {
  constructor(private elementRef: ElementRef) {
    this.nativeElement.classList.add('mdc-dialog__title');
  }

  get nativeElement() {
    return this.elementRef.nativeElement as HTMLElement;
  }
}
