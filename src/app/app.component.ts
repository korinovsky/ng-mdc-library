import {Component} from '@angular/core';
import {DialogComponent} from '@mdc/dialog/dialog.component';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openDialog(dialog: DialogComponent) {
    dialog.open();
    dialog.closed
      .pipe(first())
      .subscribe(action => console.log(action));
  }
}
