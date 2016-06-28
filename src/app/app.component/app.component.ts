import { Component } from '@angular/core';
import { UtSideNavComponent } from "../ut-side-nav.component";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ UtSideNavComponent ],
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
  }
}
