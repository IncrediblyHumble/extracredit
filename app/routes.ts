import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome";


const appRoutes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes);
