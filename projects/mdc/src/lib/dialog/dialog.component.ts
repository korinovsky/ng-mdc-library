import {AfterContentInit, Component, ElementRef, EventEmitter, Output} from '@angular/core';
import {Dialog} from './dialog.model';

@Component({
  selector: '[mdcDialog]',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements AfterContentInit {
  @Output() opening: EventEmitter<null>;
  @Output() opened: EventEmitter<null>;
  @Output() closing: EventEmitter<string>;
  @Output() closed: EventEmitter<string>;
  private dialog: Dialog;

  constructor(private elementRef: ElementRef) {
    const nativeElement = this.elementRef.nativeElement as Element;
    nativeElement.classList.add('mdc-dialog');
    nativeElement.setAttribute('role', 'dialog');
    nativeElement.setAttribute('aria-modal', 'true');
  }

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
