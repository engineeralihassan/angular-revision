import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  @Output()
  onchangeQuery: EventEmitter<string> = new EventEmitter<string>();
  onchangequeryFunc() {
    this.onchangeQuery.emit(this.query);

  }
}
