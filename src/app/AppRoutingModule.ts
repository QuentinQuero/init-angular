import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";

export const appRouteList: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];
