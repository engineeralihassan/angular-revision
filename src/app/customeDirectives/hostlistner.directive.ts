import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistner]'
})
export class HostlistnerDirective {

  constructor(private element: ElementRef, private rendrer: Renderer2) {
  }
  @Input() defualtColor: string = 'gray';
  @Input() hoverColor: string = 'brown';


  @HostBinding('style.color') color = this.defualtColor;
  @HostListener('mouseenter') onmouse() {
    this.rendrer.setStyle(this.element.nativeElement, 'background-color', "red");
    this.color = this.defualtColor;
    this.rendrer.setStyle(this.element.nativeElement, 'color', this.color);
    this.rendrer.setStyle(this.element.nativeElement, 'padding', '20px');
    this.rendrer.setStyle(this.element.nativeElement, 'transition', '0.6s');
  }
  @HostListener('mouseleave') offmouse() {
    this.color = this.hoverColor;
    this.rendrer.setStyle(this.element.nativeElement, 'background-color', "green")
    this.rendrer.setStyle(this.element.nativeElement, 'color', this.color);
    this.rendrer.setStyle(this.element.nativeElement, 'padding', '10px');
    this.rendrer.setStyle(this.element.nativeElement, 'transition', '1s');
  }

}
