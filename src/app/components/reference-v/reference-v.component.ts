import { Component } from '@angular/core';

@Component({
  selector: 'app-reference-v',
  templateUrl: './reference-v.component.html',
  styleUrls: ['./reference-v.component.css']
})
export class ReferenceVComponent {
  hello: string = "This property is show from the class by reference variables"
  clickH(element: HTMLInputElement) {
    alert(element.value);
  }
}
