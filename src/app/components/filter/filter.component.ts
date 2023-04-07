import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('total') All: number = 0;
  @Input() Free: number = 0;
  @Input() Premium: number = 0;
  selectedVALUE: string = 'All';
  text: string = "This Text is passed from child to parent component";
  @Output()
  getSelectedradionchange: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  gettextvalue: EventEmitter<string> = new EventEmitter<string>();

  onRadioBtnChange() {
    this.getSelectedradionchange.emit(this.selectedVALUE);
    console.log(this.selectedVALUE)
  }
  // event Emmitter 2 is 
  @Output()
  onpassText() {
    if (this.text === 'This Text is passed from child to parent component') {
      this.text = "Hello Ali this Text is Changed ";
    }
    else {
      this.text = 'This Text is passed from child to parent component';
    }
    // evet the emmitter
    this.gettextvalue.emit(this.text);
    console.log(this.text)
  }


}
