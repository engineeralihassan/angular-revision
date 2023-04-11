import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component01Component } from './component01/component01.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Databinding02Component } from './databinding02/databinding02.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
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
import { NgclassComponent } from './customeDirectives/ngclass/ngclass.component';
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
    NgclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
