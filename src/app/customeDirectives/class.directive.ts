import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private ele: ElementRef, private rendrer: Renderer2) { }
  @Input() set appClass(data: Object) {
    let entries = Object.entries(data);
    for (let [clas, condition] of entries) {
      if (condition) {
        this.rendrer.addClass(this.ele.nativeElement, clas)
      }
    }
  }

}
