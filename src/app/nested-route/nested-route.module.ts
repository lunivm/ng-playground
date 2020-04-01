import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedRouteComponent } from './nested-route.component';
import { RouterModule } from '@angular/router';
import { LoggedInComponent } from '../layout/logged-in/logged-in.component';

const nestedRoutes = [
  {
    path: '',
    component: LoggedInComponent,
    children: [
      {
        path: 'nested-route',
        component: NestedRouteComponent
      }
    ]
  }
];

@NgModule({
  declarations: [NestedRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(nestedRoutes)
  ]
})
export class NestedRouteModule { }
