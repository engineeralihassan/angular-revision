import { Component, ElementRef, ViewChild } from '@angular/core';
import { Viewchild2Component } from '../viewchild2/viewchild2.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {
  @ViewChild('dob') dob1 !: ElementRef;
  @ViewChild('age') age !: ElementRef;
  @ViewChild(Viewchild2Component, { static: true }) childcomp !: Viewchild2Component;

  calculateAge() {
    let dob = new Date(this.dob1.nativeElement.value).getFullYear();
    let cryear = new Date().getFullYear();
    console.log(dob);
    console.log(cryear);
    let age1 = cryear - +dob;
    this.age.nativeElement.value = age1;

    // console.log(this.dob1);
    // console.log(this.age);

  }

}
