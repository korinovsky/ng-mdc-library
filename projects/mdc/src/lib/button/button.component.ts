import {
  ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, InjectionToken, Input, Optional, ViewEncapsulation
} from '@angular/core';
import {RippleComponent} from '../ripple/ripple.component';
import {inputBooleanValue} from '../utils/utils';

export const MDC_DEFAULT_BUTTON_TYPE = new InjectionToken<ButtonType>('MDC_DEFAULT_BUTTON_TYPE');

export enum ButtonType {
  Text,
  Raised,
  Unelevated,
  Outlined,
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[mdcButton], a[mdcButton]',
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends RippleComponent {
  @Input() icon;
  @Input() trailingIcon;
  private type;

  constructor(
    @Optional() @Inject(MDC_DEFAULT_BUTTON_TYPE) private readonly defaultButtonType: ButtonType,
    elementRef: ElementRef,
  ) {
    super(elementRef);
    this.nativeElement.classList.add('mdc-button');
    if (this.defaultButtonType === null) {
      this.defaultButtonType = ButtonType.Text;
    }
    this.type = this.defaultButtonType;
  }

  get nativeElement() {
    return this.elementRef.nativeElement as HTMLButtonElement;
  }

  @Input()
  set text(value: boolean) {
    this.setType(ButtonType.Text, value);
  }

  get raised() {
    return this.type === ButtonType.Raised;
  }

  @Input()
  @HostBinding('class.mdc-button--raised')
  set raised(value: boolean) {
    this.setType(ButtonType.Raised, value);
  }

  get unelevated() {
    return this.type === ButtonType.Unelevated;
  }

  @Input()
  @HostBinding('class.mdc-button--unelevated')
  set unelevated(value: boolean) {
    this.setType(ButtonType.Unelevated, value);
  }

  get outlined() {
    return this.type === ButtonType.Outlined;
  }

  @Input()
  @HostBinding('class.mdc-button--outlined')
  set outlined(value: boolean) {
    this.setType(ButtonType.Outlined, value);
  }

  @Input()
  set dense(value: boolean) {
    this.nativeElement.classList.toggle('mdc-button--dense', inputBooleanValue(value));
  }


  private setType(type: ButtonType, value: boolean) {
    this.type = inputBooleanValue(value) ? type : this.defaultButtonType;
  }
}
