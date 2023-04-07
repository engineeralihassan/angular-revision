import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  @Input() ourstrenght: string = '';
  @Input() coursesall: any[] = [];
}
