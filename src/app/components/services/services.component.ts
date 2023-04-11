import { Component } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Service1Service } from 'src/app/services/service1.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers:[Service1Service]

})
export class ServicesComponent {
  // enrolService = new Service1Service;
  constructor(private enrolService: Service1Service, private dataservice: DataserviceService) { }
  enroll(event: any) {
    const buttonText = event.target.innerText;
    console.log(buttonText);
    this.enrolService.onEnroll(buttonText);

  }
  courses: { id: number, name: string, desc: string }[] = [];
  ngOnInit() {
    this.courses = this.dataservice.arr;
  }





}
