import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './component01/component01.component';
import { Databinding02Component } from './databinding02/databinding02.component';
import { DirectivesComponent } from './Directives/directives/directives.component';
import { MainComponent } from './components/main/main.component';
import { TheoryComponent } from './components/theory/theory.component';
import { ReferenceVComponent } from './components/reference-v/reference-v.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { LifecyclehooksComponent } from './components/lifecyclehooks/lifecyclehooks.component';
import { ContentchildComponent } from './components/contentchild/contentchild.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { Service1Service } from './services/service1.service';
import { ServicesComponent } from './components/services/services.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { RoutingComponent } from './components/routing/routing.component';


const routes: Routes = [
  { path: '', component: Component01Component },
  { path: 'component2', component: Databinding02Component },
  { path: 'component3', component: DirectivesComponent },
  { path: 'courses', component: MainComponent },
  { path: 'theory', component: TheoryComponent },
  { path: 'ng-content', component: NgContentComponent },
  { path: 'lifecyclehooks', component: LifecyclehooksComponent },
  { path: 'customedirective', component: ReferenceVComponent },
  {
    path: 'reference-v', component: ReferenceVComponent
  },
  { path: 'viewchild', component: ViewchildComponent },
  { path: 'contentchild', component: ContentchildComponent },
  { path: 'custome-structural-Directives', component: ReferenceVComponent },
  { path: 'ngSwitch', component: NgSwitchComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'routing', component: RoutingComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
