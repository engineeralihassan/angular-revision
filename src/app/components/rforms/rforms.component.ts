import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('male'),
      age: new FormControl(null, Validators.required),
      comments: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
