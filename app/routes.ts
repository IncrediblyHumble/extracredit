import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome";
import {HomeComponent} from "./home/home";
import {CSRComponent} from "./create_source_report/csr";


const appRoutes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'csr',
    component:CSRComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
