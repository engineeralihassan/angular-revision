import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component01Component } from './component01/component01.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Databinding02Component } from './databinding02/databinding02.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './Directives/directives/directives.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MainComponent } from './components/main/main.component';
import { TheoryComponent } from './components/theory/theory.component';
import { ReferenceVComponent } from './components/reference-v/reference-v.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { Viewchild2Component } from './components/viewchild2/viewchild2.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { LifecyclehooksComponent } from './components/lifecyclehooks/lifecyclehooks.component';
import { ContentchildComponent } from './components/contentchild/contentchild.component';
import { SetbackgroundDirective } from './customeDirectives/setbackground.directive';
import { HostlistnerDirective } from './customeDirectives/hostlistner.directive';

import { ClassDirective } from './customeDirectives/class.directive';
import { IfDirective } from './customeDirectives/if.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ServicesComponent } from './components/services/services.component';
import { AddcourseComponent } from './components/services/addcourse/addcourse.component';
import { ServiceCourseComponent } from './components/service-course/service-course.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { RoutingComponent } from './components/routing/routing.component';
import { DirectivebComponent } from './components/directiveb/directiveb.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterformComponent } from './components/filterform/filterform.component';
import { TestingComponent } from './components/testing/testing.component';
import { TdformsComponent } from './components/tdforms/tdforms.component';
import { RformsComponent } from './components/rforms/rforms.component';
@NgModule({
  declarations: [
    AppComponent,
    Component01Component,
    NavbarComponent,
    Databinding02Component,
    FooterComponent,
    DirectivesComponent,
    SearchComponent,
    FilterComponent,
    CoursesComponent,
    MainComponent,
    TheoryComponent,
    ReferenceVComponent,
    ViewchildComponent,
    Viewchild2Component,
    NgContentComponent,
    LifecyclehooksComponent,
    ContentchildComponent,
    SetbackgroundDirective,
    HostlistnerDirective,

    ClassDirective,
     IfDirective,
     NgSwitchComponent,
     ServicesComponent,
     AddcourseComponent,
     ServiceCourseComponent,
     ObservablesComponent,
     SubjectsComponent,
     RoutingComponent,
     DirectivebComponent,
     ProductsComponent,
     FilterformComponent,
     TestingComponent,
     TdformsComponent,
     RformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
