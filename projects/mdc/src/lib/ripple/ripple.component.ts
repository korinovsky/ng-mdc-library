import {ElementRef, OnDestroy} from '@angular/core';
import {MDCRipple} from '@material/ripple/component';

export abstract class RippleComponent implements OnDestroy {
  private ripple: MDCRipple;

  protected constructor(protected elementRef: ElementRef) {
    this.ripple = new MDCRipple(elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.ripple.destroy();
  }
}
