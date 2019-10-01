import {AfterContentInit, Component, ElementRef, EventEmitter, HostBinding, Output} from '@angular/core';
import {Dialog} from './dialog.model';

@Component({
  selector: '[mdcDialog]',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements AfterContentInit {
  @HostBinding('class.mdc-dialog') dialogClass = true;
  @HostBinding('attr.role') role = 'dialog';
  @HostBinding('attr.aria-modal') ariaModal = true;
  @Output() opening: EventEmitter<null>;
  @Output() opened: EventEmitter<null>;
  @Output() closing: EventEmitter<string>;
  @Output() closed: EventEmitter<string>;
  private dialog: Dialog;

  constructor(private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    this.dialog = new Dialog(this.elementRef.nativeElement);
    this.opening = this.dialog.opening;
    this.opened = this.dialog.opened;
    this.closing = this.dialog.closing;
    this.closed = this.dialog.closed;
  }

  open() {
    this.dialog.open();
  }

  close(action?: string) {
    this.dialog.close(action);
  }
}
