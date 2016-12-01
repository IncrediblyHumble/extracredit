import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome";
import {HomeComponent} from "./home/home";
import {CSRComponent} from "./create_source_report/csr";
import {VSRComponent} from "./view_source_reports/view_source_reports";
import {WSRResolver} from "./resolvers/water_source_reports.resolver";


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
  },
  {
    path:'vsr',
    component:VSRComponent,
    resolve:{
      reports:WSRResolver
    }
  }
];

export const routing = RouterModule.forRoot(appRoutes);
