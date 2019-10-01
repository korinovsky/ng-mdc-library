import {Directive, ElementRef, Input} from '@angular/core';
import {strings} from '@material/dialog/constants';
import {inputBooleanValue} from '../../utils/utils';

@Directive({
  selector: '[mdcDialogInitialFocus]'
})
export class DialogInitialFocusDirective {
  private nativeElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  @Input()
  set mdcDialogInitialFocus(value: boolean) {
    this.nativeElement.toggleAttribute(strings.INITIAL_FOCUS_ATTRIBUTE, inputBooleanValue(value));
  }
}
