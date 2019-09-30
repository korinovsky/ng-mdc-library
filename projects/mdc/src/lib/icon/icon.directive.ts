import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[mdcIcon]'
})
export class IconDirective {
  @HostBinding('class.material-icons') iconsClass = true;
  @HostBinding('attr.aria-hidden') ariaHidden = true;
}
