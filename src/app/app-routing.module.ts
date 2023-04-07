import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './component01/component01.component';
import { Databinding02Component } from './databinding02/databinding02.component';
import { DirectivesComponent } from './Directives/directives/directives.component';
import { MainComponent } from './components/main/main.component';
import { TheoryComponent } from './components/theory/theory.component';
import { ReferenceVComponent } from './components/reference-v/reference-v.component';

const routes: Routes = [
  { path: '', component: Component01Component },
  { path: 'component2', component: Databinding02Component },
  { path: 'component3', component: DirectivesComponent },
  { path: 'courses', component: MainComponent },
  { path: 'theory', component: TheoryComponent },
  {
    path: 'reference-v', component: ReferenceVComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
