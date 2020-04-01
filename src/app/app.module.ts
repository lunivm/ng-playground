import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SimpleRouteModule } from './simple-route/simple-route.module';
import { NestedRouteModule } from './nested-route/nested-route.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SimpleRouteModule,
    NestedRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
