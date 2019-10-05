import {
  AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, HostListener, OnDestroy, Output, QueryList,
  ViewChild
} from '@angular/core';
import {MDCDialogAdapter} from '@material/dialog/adapter';
import MDCDialogFoundation from '@material/dialog/foundation';
import {areTopsMisaligned, createFocusTrapInstance, isScrollable} from '@material/dialog/util';
import {DialogContentDirective} from './content/content.directive';
import {FocusTrap} from 'focus-trap';
import {DialogButtonComponent} from './button/button.component';
import {closest, matches} from '@material/dom/ponyfill';
import {DialogTitleDirective} from './title/title.directive';

const LAYOUT_EVENTS = ['resize', 'orientationchange'];
let id = 0;

@Component({
  selector: 'mdc-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements AfterContentInit, OnDestroy {
  @Output() opening = new EventEmitter();
  @Output() opened = new EventEmitter();
  @Output() closing = new EventEmitter<string>();
  @Output() closed = new EventEmitter<string>();
  @ViewChild('dialog', {static: true}) dialog: ElementRef<HTMLElement>;
  @ContentChild(DialogTitleDirective, {static: false}) title: DialogTitleDirective;
  @ContentChild(DialogContentDirective, {static: false}) content: DialogContentDirective;
  @ContentChildren(DialogButtonComponent, {descendants: true}) buttonQueryList: QueryList<DialogButtonComponent>;
  componentId = ++id;
  private focusTrap: FocusTrap;
  private foundation: MDCDialogFoundation;

  get dialogElement(): HTMLElement {
    return this.dialog.nativeElement as HTMLElement;
  }

  private get adapter(): MDCDialogAdapter {
    const initialFocusAttribute = MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE;
    const actionAttribute = MDCDialogFoundation.strings.ACTION_ATTRIBUTE;
    const buttonDefaultAttribute = MDCDialogFoundation.strings.BUTTON_DEFAULT_ATTRIBUTE;
    return {
      addClass: (className: string) => this.dialogElement.classList.add(className),
      removeClass: (className: string) => this.dialogElement.classList.remove(className),
      hasClass: (className: string) => this.dialogElement.classList.contains(className),
      addBodyClass: (className: string) => document.body.classList.add(className),
      removeBodyClass: (className: string) => document.body.classList.remove(className),
      eventTargetMatches: (target: HTMLElement, selector: string) => matches(target, selector),
      trapFocus: (focusElement: HTMLElement) => {
        this.focusTrap = createFocusTrapInstance(this.dialogElement, undefined, focusElement);
        this.focusTrap.activate();
      },
      releaseFocus: () => this.focusTrap && this.focusTrap.deactivate(),
      isContentScrollable: () => this.content ? isScrollable(this.content.nativeElement) : false,
      areButtonsStacked: () => {
        const buttons = this.buttons;
        return buttons.length ? areTopsMisaligned(buttons) : false;
      },
      getActionFromEvent: (event: any) => {
        const elem = closest(event.target, `[${actionAttribute}]`);
        return elem && elem.getAttribute(actionAttribute);
      },
      clickDefaultButton: () => {
        const button = this.dialogElement.querySelector(`[${buttonDefaultAttribute}]`) as HTMLButtonElement;
        if (button) {
          button.click();
        }
      },
      reverseButtons: () => {
        const buttons = this.buttons;
        return buttons.length && buttons
          .reverse()
          .forEach(button => button.parentElement && button.parentElement.appendChild(button));
      },
      notifyOpening: () => this.handleOpening(),
      notifyOpened: () => this.opened.emit(),
      notifyClosing: (action: string) => this.handleClosing(action),
      notifyClosed: (action: string) => this.closed.emit(action),
      getInitialFocusEl: () => this.dialogElement.querySelector(`[${initialFocusAttribute}]`),
    };
  }

  private get buttons(): HTMLButtonElement[] {
    return this.buttonQueryList.map(item => item.nativeElement);
  }

  ngAfterContentInit(): void {
    if (this.content) {
      const contentId = `mdc-dialog-content-${this.componentId}`;
      this.content.nativeElement.setAttribute('id', contentId);
      this.dialogElement.setAttribute('aria-describedby', contentId);
    }
    if (this.title) {
      const titleId = `mdc-dialog-title-${this.componentId}`;
      this.title.nativeElement.setAttribute('id', titleId);
      this.dialogElement.setAttribute('aria-labelledby', titleId);
    }
    this.foundation = new MDCDialogFoundation(this.adapter);
    this.foundation.init();
  }

  ngOnDestroy(): void {
    this.foundation.destroy();
  }

  open(): void {
    this.foundation.open();
  }

  close(action?: string): void {
    this.foundation.close(action);
  }

  @HostListener('click', ['$event'])
  private handleClick(event): void {
    this.foundation.handleClick(event);
  }

  @HostListener('keydown', ['$event'])
  private handleKeydown(event): void {
    this.foundation.handleKeydown(event);
  }

  private handleOpening(): void {
    this.opening.emit();
    LAYOUT_EVENTS.forEach((event: string) =>
      window.addEventListener(event, this.handleLayout.bind(this))
    );
    document.addEventListener('keydown', this.handleDocumentKeyDown.bind(this));
  }

  private handleClosing(action: string): void {
    this.closing.emit(action);
    LAYOUT_EVENTS.forEach((event: string) =>
      window.removeEventListener(event, this.handleLayout.bind(this))
    );
    document.removeEventListener('keydown', this.handleDocumentKeyDown.bind(this));
  }

  private handleDocumentKeyDown(e: KeyboardEvent): void {
    this.foundation.handleDocumentKeydown(e);
  }

  private handleLayout(): void {
    this.foundation.layout();
  }
}
