import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[mdcIcon]'
})
export class IconDirective {
  constructor(private elementRef: ElementRef) {
    this.nativeElement.classList.add('material-icons');
    this.nativeElement.setAttribute('aria-hidden', 'true');
  }

  get nativeElement() {
    return this.elementRef.nativeElement as HTMLElement;
  }
}
