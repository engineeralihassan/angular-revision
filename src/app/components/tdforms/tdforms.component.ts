import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouteConfigLoadEnd } from '@angular/router';
@Component({
  selector: 'app-tdforms',
  templateUrl: './tdforms.component.html',
  styleUrls: ['./tdforms.component.css']
})
export class TdformsComponent {
  submitted = false;
  formData = {};
  @ViewChild('myForm') form !:NgForm;
  myForm!: NgForm;
  onSubmit() {
    console.log(this.form);
console.log(this.form.value.city)
     this.submitted = true;
    this.formData = {...this.formData, ...this.form.value};
    console.log(this.formData);
  }
}
