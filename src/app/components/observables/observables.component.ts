import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  text: string = '';

  // myobservable = new Observable((observer) => {
  //   console.log("The observer is start");
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 2000);
  //   setTimeout(() => {
  //     // observer.error(new Error("Please try again later"));
  //     observer.next('4')

  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 4000);
  //   // observer.next('1');
  //   // observer.next('2');
  //   // observer.next('3');
  //   // observer.next('4');
  //   // observer.next('5');
  //   console.log("All the data is fetched");

  // })

  // arr: string[] = [];
  // arrdata = new Observable((observer) => {
  //   observer.next("Ali Hassan");
  //   observer.next("Husnain Rubani");
  //   observer.next("Usman Rubbani");
  //   observer.error(new Error("your friends list han an error"));
  //   observer.complete();

  // });

  arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
  arr2: string[] = ["ali ", "Hassan", "Asim ", "Hameed", "Asjad Durani"];
  myob = of(this.arr1, this.arr2, 2034, 56, 7890);


  myObservable = Observable.create((observer: any) => {
    // Emit three values after 1 second, 2 seconds, and 3 seconds respectively
    setTimeout(() => {
      observer.next('First value');
    }, 1000);

    setTimeout(() => {
      observer.next('Second value');
    }, 2000);

    setTimeout(() => {
      observer.next('Third value');
    }, 3000);

    // Complete the observable after emitting the third value
    setTimeout(() => {
      observer.complete();
    }, 3000);
  });
  arr3 = [12, 34, 56, 78, 90]
  myobs = from(this.arr1);
  usersObservable = from(this.arr3);

  tranformedData = this.usersObservable.pipe(
    map(user => user * 3)
  )


  ngOnInit() {
    // this.myobservable.subscribe((data) => {
    //   console.log(data);
    // }, (error) => {
    //   alert(error.message);
    // }, () => {
    //   alert("The data is complete fetched");

    // })
    // // second observables calls
    // this.arrdata.subscribe((data: any) => {
    //   this.arr.push(data);
    //   console.log(this.arr.length, this.arr);

    // }, (error) => {
    //   console.log(error.message)
    // })
    this.myObservable.subscribe((data: any) => {
      console.log(data);

    })
    this.myob.subscribe((subs) => {
      console.log(subs);

    })
    this.myobs.subscribe((data) => {
      console.log(data);
    })
    this.tranformedData.subscribe((data) => {
      console.log(data);
    });
  }
}
