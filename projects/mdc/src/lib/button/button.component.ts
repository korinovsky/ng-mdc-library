import {ChangeDetectionStrategy, Component, HostBinding, Inject, InjectionToken, Input, Optional, ViewEncapsulation} from '@angular/core';

export const MDC_DEFAULT_BUTTON_TYPE = new InjectionToken<ButtonType>('MDC_DEFAULT_BUTTON_TYPE');

export enum ButtonType {
  Text,
  Raised,
  Unelevated,
  Outlined,
}

@Component({
  selector: 'button[mdcButton], a[mdcButton]',
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @HostBinding('class.mdc-button') buttonClass = true;
  @HostBinding('class.mdc-button--dense') denseClass = false;
  private type;

  constructor(
    @Optional()
    @Inject(MDC_DEFAULT_BUTTON_TYPE)
    private readonly defaultButtonType: ButtonType
  ) {
    if (this.defaultButtonType === null) {
      this.defaultButtonType = ButtonType.Text;
    }
    this.type = this.defaultButtonType;
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
    this.denseClass = value !== false;
  }


  private setType(type: ButtonType, value: boolean) {
    this.type = value !== false ? type : this.defaultButtonType;
  }
}
