import {Directive, ElementRef, Input} from '@angular/core';
import {strings} from '@material/dialog/constants';
import {inputBooleanValue} from '../../utils/utils';

@Directive({
  selector: '[mdcDialogInitialFocus]'
})
export class DialogInitialFocusDirective {
  constructor(private elementRef: ElementRef) {}

  @Input()
  set mdcDialogInitialFocus(value: boolean) {
    this.elementRef.nativeElement.toggleAttribute(strings.INITIAL_FOCUS_ATTRIBUTE, inputBooleanValue(value));
  }
}
