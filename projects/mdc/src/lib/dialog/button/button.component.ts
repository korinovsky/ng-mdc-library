import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional, ViewEncapsulation} from '@angular/core';
import {ButtonComponent, ButtonType, MDC_DEFAULT_BUTTON_TYPE} from '../../button/button.component';
import {strings} from '@material/dialog/constants';
import {inputBooleanValue} from '../../utils/utils';

@Component({
  selector: 'button[mdcDialogButton]',
  templateUrl: '../../button/button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogButtonComponent extends ButtonComponent {
  @HostBinding('class.mdc-button__button') buttonButtonClass = true;
  @HostBinding(`attr.${strings.ACTION_ATTRIBUTE}`) action: string;

  @Input()
  set mdcDialogButton(value: string) {
    this.action = value === '' ? strings.CLOSE_ACTION : value;
  }

  private nativeElement = this.elementRef.nativeElement as HTMLButtonElement;

  constructor(
    @Optional() @Inject(MDC_DEFAULT_BUTTON_TYPE) defaultButtonType: ButtonType,
    elementRef: ElementRef,
  ) {
    super(defaultButtonType, elementRef);
  }

  @Input()
  set default(value: boolean) {
    this.nativeElement.toggleAttribute(strings.BUTTON_DEFAULT_ATTRIBUTE, inputBooleanValue(value));
  }
}
