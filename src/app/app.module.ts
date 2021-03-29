import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRouteList} from './AppRoutingModule';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TestComponentComponent } from './components/test-component/test-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TestComponentComponent,
  ],
  imports: [
    RouterModule.forRoot(appRouteList),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
