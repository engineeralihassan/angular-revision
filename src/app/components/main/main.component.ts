import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  courses: any[] = [
    {
      id: 1, name: "Abs course", type: "free", price: 234
    }
    ,
    {
      id: 2, name: "Abs course", type: "free", price: 234
    },
    {
      id: 3, name: "Abs course", type: "free", price: 234
    },
    {
      id: 4, name: "Abs course", type: "free", price: 234
    },
    {
      id: 5, name: "Abs course", type: "free", price: 234
    },

    {
      id: 6, name: "Abs course", type: "premium", price: 234
    },
    {
      id: 7, name: "Abs course", type: "premium", price: 234
    },
    {
      id: 8, name: "Abs course", type: "premium", price: 234
    },
    {
      id: 9, name: "Abs course", type: "premium", price: 234
    },
    {
      id: 10, name: "Abs course", type: "premium", price: 234
    },
    {
      id: 11, name: "Abs course", type: "premium", price: 234
    }



  ];
  getpre() {
    return this.courses.filter((c) => c.type == "premium").length
  }
  getfre(): number {
    return this.courses.filter((c) => c.type == "free").length
  }
  getall() {
    return this.courses.length;
  }
  ourstrenght: string = "Students are our strenght";
}
