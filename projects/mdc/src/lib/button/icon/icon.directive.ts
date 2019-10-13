import {Directive, ElementRef} from '@angular/core';
import {IconDirective} from '../../icon/icon.directive';

@Directive({
  selector: '[mdcButtonIcon]'
})
export class ButtonIconDirective extends IconDirective {
  constructor(elementRef: ElementRef) {
    super(elementRef);
    this.nativeElement.classList.add('mdc-button__icon');
  }
}
