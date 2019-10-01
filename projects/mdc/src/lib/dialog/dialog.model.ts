import {MDCDialog} from '@material/dialog/component';
import {MDCDialogCloseEvent} from '@material/dialog/types';
import {EventEmitter} from '@angular/core';
import {strings} from '@material/dialog/constants';

// @ts-ignore
export class Dialog extends MDCDialog {
  opening = new EventEmitter();
  opened = new EventEmitter();
  closing = new EventEmitter<string>();
  closed = new EventEmitter<string>();

  constructor(root: Element) {
    super(root);
    this.listen(strings.CLOSED_EVENT, (event: MDCDialogCloseEvent) => this.closed.emit(event.detail.action));
    this.listen(strings.CLOSING_EVENT, (event: MDCDialogCloseEvent) => this.closing.emit(event.detail.action));
    this.listen(strings.OPENED_EVENT, () => this.opened.emit());
    this.listen(strings.OPENING_EVENT, () => this.opening.emit());
  }

  static attachTo(root: Element): Dialog {
    return new Dialog(root);
  }

  getInitialFocusEl_() {
    return this.root_.querySelector(`[${strings.BUTTON_DEFAULT_ATTRIBUTE}]`);
  }

}
