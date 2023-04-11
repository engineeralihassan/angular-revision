import { Component } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  name: string = '';
  desc: string = '';
  constructor(private data: DataserviceService) { }
  addCourse() {
    console.log(this.name, this.desc);
    this.data.addcourse1(this.name, this.desc);

  }
}
