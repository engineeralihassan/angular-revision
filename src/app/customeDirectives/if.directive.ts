import { Directive, ElementRef, Renderer2, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private ele: TemplateRef<any>, private viewdiv: ViewContainerRef) { }
  @Input('appIf') set displaydiv(condition: boolean) {
    if (condition) {
      this.viewdiv.createEmbeddedView(this.ele);
    } else {
      this.viewdiv.clear();
    }


  }

}
