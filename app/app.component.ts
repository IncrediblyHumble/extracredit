import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div id="menu" class="hidden">
                <a [routerLink]="['/home']" class="btn"></a>
      </div>
      <div id="content" class="col-md-8 col-md-offset-2">
            <router-outlet></router-outlet>
      </div>`,
})
export class AppComponent {
  name = 'Angular';
}
