import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInComponent } from './layout/logged-in/logged-in.component';
import { SimpleRouteComponent } from './simple-route/simple-route.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent,
    children: [
      {
        path: 'simple-route',
        component: SimpleRouteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
