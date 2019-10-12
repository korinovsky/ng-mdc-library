import {ChangeDetectionStrategy, Component, ElementRef, Inject, InjectionToken, Input, Optional, ViewEncapsulation} from '@angular/core';
import {ButtonComponent, ButtonType} from '../../button/button.component';
import {strings} from '@material/dialog/constants';
import {inputBooleanValue} from '../../utils/utils';
import MDCDialogFoundation from '@material/dialog/foundation';

export const MDC_DIALOG_DEFAULT_BUTTON_TYPE = new InjectionToken<ButtonType>('MDC_DIALOG_DEFAULT_BUTTON_TYPE');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[mdcDialogButton]',
  templateUrl: '../../button/button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogButtonComponent extends ButtonComponent {
  constructor(
    @Optional() @Inject(MDC_DIALOG_DEFAULT_BUTTON_TYPE) defaultButtonType: ButtonType,
    elementRef: ElementRef,
  ) {
    super(defaultButtonType, elementRef);
    this.nativeElement.classList.add('mdc-dialog__button');
  }

  private _default = false;

  get default() {
    return this._default;
  }

  @Input()
  set default(value: boolean) {
    this._default = inputBooleanValue(value);
    this.nativeElement.toggleAttribute(MDCDialogFoundation.strings.BUTTON_DEFAULT_ATTRIBUTE, this._default);
  }

  @Input()
  set mdcDialogButton(value: string) {
    const actionAttribute = MDCDialogFoundation.strings.ACTION_ATTRIBUTE;
    const action = value === '' ? strings.CLOSE_ACTION : value;
    if (action) {
      this.nativeElement.setAttribute(actionAttribute, action);
    } else {
      this.nativeElement.removeAttribute(actionAttribute);
    }
  }
}
