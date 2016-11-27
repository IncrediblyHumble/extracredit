import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome";
import {HomeComponent} from "./home/home";


const appRoutes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
