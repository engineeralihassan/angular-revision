import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  onEnroll(title: string) {
    alert("This is clicked" + " " + title)
  }
  message(name: string) {
    alert("This is clicked" + " " + name)
  }
}
