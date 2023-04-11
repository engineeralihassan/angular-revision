import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reference-v',
  templateUrl: './reference-v.component.html',
  styleUrls: ['./reference-v.component.css']
})
export class ReferenceVComponent {
  display: boolean = false;
  hello: string = "This property is show from the class by reference variables";
  @ContentChild('paragrap') parentcompEl !: ElementRef;
  clg: string = '';
  show() {
    this.display = !this.display;
  }
  ngAfterContentInit() {

    console.log("This is the Trxt::", this.parentcompEl.nativeElement.innerHTML);
    this.clg = this.parentcompEl.nativeElement.innerHTML;
  }
  clickH(element: HTMLInputElement) {
    alert(element.value);
  }
}
