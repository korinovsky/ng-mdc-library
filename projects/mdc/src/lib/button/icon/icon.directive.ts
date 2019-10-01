import {Directive, HostBinding} from '@angular/core';
import {IconDirective} from '../../icon/icon.directive';

@Directive({
  selector: '[mdcButtonIcon]'
})
export class ButtonIconDirective extends IconDirective {
  @HostBinding('class.mdc-button__icon') iconClass = true;
}
