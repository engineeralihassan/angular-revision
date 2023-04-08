import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetbackground]'
})
export class SetbackgroundDirective {

  // constructor(private element: ElementRef) {


  // }
  // ngOnInit() {
  //   this.element.nativeElement.style.backgroundColor = 'red';
  //   this.element.nativeElement.style.padding = '10px';
  // }
  // Renderer 2
  constructor(private element: ElementRef, private rendrer: Renderer2) {


  }
  ngOnInit() {
    this.rendrer.setStyle(this.element.nativeElement, 'background-color', "pink")
    this.rendrer.setStyle(this.element.nativeElement, 'color', 'white');
    this.rendrer.setStyle(this.element.nativeElement, 'padding', '10px');
    this.rendrer.addClass(this.element.nativeElement, 'add')
    this.rendrer.setAttribute(this.element.nativeElement, 'title', "This title is set from custome attribute ")
  }

}
