import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild2',
  templateUrl: './viewchild2.component.html',
  styleUrls: ['./viewchild2.component.css']
})
export class Viewchild2Component {
  sayHy() {
    console.log("this is the Child  Component class methods");
    return "This is the child component function return "
  }
}
