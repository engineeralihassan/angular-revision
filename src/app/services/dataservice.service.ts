import { EventEmitter, Injectable } from '@angular/core';
import { Service1Service } from './service1.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataserviceService {

  constructor(private service: Service1Service) { }
  arr: { id: number, name: string, desc: string }[] = [
    { id: 1, name: "Java script Course", desc: "This is the world best java script cours" },
    { id: 2, name: " Core Java  Course", desc: "This is the world best java  cours" },
    { id: 3, name: "Kotlin Course", desc: "This is the world best kotlin cours" },
    { id: 4, name: "Ruby on Rails Course", desc: "This is the world best Kotlin cours" },
    { id: 5, name: "python Course", desc: "This is the world best Python cours" },

  ]

  onShowCourse = new EventEmitter<{ id: number, name: string, desc: string }>();
  onshowEmit(data: any) {
    this.onShowCourse.emit(data);
    console.log(data);
  }


  addcourse1(name1: string, desc1: string) {
    let num = Math.trunc(Math.random() * 100 + 1);
    console.log(num);
    this.arr.push({ id: num, name: name1, desc: desc1 })
    this.service.message(name1);
  }
}
