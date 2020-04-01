import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './logged-in/header/header.component';
import { RouterModule } from '@angular/router';
import { LoggedInComponent } from './logged-in/logged-in.component';

const declaredExports = [
  HeaderComponent,
  LoggedInComponent
];

@NgModule({
  declarations: declaredExports,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: declaredExports
})
export class LayoutModule { }
