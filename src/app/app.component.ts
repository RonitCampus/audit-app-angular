import { SnotifyService } from 'ng-snotify';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SnotifyService]
})
export class AppComponent {
  title = 'app works!';

}
