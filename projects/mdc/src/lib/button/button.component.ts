import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

enum ButtonType {
  Text,
  Raised,
  Unelevated,
  Outlined,
}

const defaultButtonType = ButtonType.Text;

@Component({
  selector: 'button[mdcButton], a[mdcButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @HostBinding('class.mdc-button') buttonClass = true;
  @HostBinding('class.mdc-button--dense') denseClass = false;
  private type = defaultButtonType;

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
    this.type = value !== false ? type : defaultButtonType;
  }
}
