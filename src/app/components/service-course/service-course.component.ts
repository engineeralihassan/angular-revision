import { Component } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-service-course',
  templateUrl: './service-course.component.html',
  styleUrls: ['./service-course.component.css']
})
export class ServiceCourseComponent {
  user: any = {};
  constructor(private dataservice: DataserviceService) { }
  ngOnInit() {
    this.dataservice.onShowCourse.subscribe((data) => {
      this.user = data;
      console.log("Selected course is :::::", this.user);
    })
  }

}
