import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() All: number = 0;
  @Input() Free: number = 0;
  @Input() Premium: number = 0;

}
