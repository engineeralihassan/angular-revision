import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  arr: { id: number, name: string, desc: string }[] = [
    { id: 1, name: "Java script Course", desc: "This is the world best java script cours" },
    { id: 2, name: " Core Java  Course", desc: "This is the world best java  cours" },
    { id: 3, name: "Kotlin Course", desc: "This is the world best kotlin cours" },
    { id: 4, name: "Ruby on Rails Course", desc: "This is the world best Kotlin cours" },
    { id: 5, name: "python Course", desc: "This is the world best Python cours" },
  ]

  addcourse1(name1: string, desc1: string) {
    let num = Math.trunc(Math.random() * 100 + 1);
    console.log(num);
    this.arr.push({ id: num, name: name1, desc: desc1 })
  }
}
