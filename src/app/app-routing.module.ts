import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './component01/component01.component';
import { Databinding02Component } from './databinding02/databinding02.component';

const routes: Routes = [
  { path: '', component: Component01Component },
  { path: 'component2', component: Databinding02Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
