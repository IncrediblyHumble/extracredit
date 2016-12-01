import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome";
import {HomeComponent} from "./home/home";
import {CSRComponent} from "./create_source_report/csr";
import {VSRComponent} from "./view_source_reports/view_source_reports";
import {WSRResolver} from "./resolvers/water_source_reports.resolver";
import {VQRComponent} from "./view_quality_reports/view_quality_reports";
import {WQRResolver} from "./resolvers/water_quality_reports.resolver";
import {CQRComponent} from "./create_quality_report/cqr";


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
    path:'cqr',
    component:CQRComponent
  },
  {
    path:'vsr',
    component:VSRComponent,
    resolve:{
      reports:WSRResolver
    }
  },
  {
    path:'vqr',
    component:VQRComponent,
    resolve:{
      reports:WQRResolver
    }
  }
];

export const routing = RouterModule.forRoot(appRoutes);
