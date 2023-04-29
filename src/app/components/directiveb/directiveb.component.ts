import { Component } from '@angular/core';

@Component({
  selector: 'app-directiveb',
  templateUrl: './directiveb.component.html',
  styleUrls: ['./directiveb.component.css']
})
export class DirectivebComponent {
  arr: string[] = ["Ali Hassan", "HUnsian Rubbani", "Ali Raza shahid", "Aslam shukhhera"];
  ar: number[] = [12, 13, 14, 15, 16, 17, 18, 19, 20];
  colors = ["red", "green", "yellow", "blue", "black", "purple", "white", "pink"]
  items = [
    { name: 'Item 1', checked: false },
    { name: 'Item 2', checked: false },
    { name: 'Item 3', checked: false },
    { name: 'Item 4', checked: false },
  ];
  search: string = "";
  isLoading = false;
  showMessage = false;

  showLoading() {
    this.isLoading = true;

    // Wait for 4 seconds before showing the message
    setTimeout(() => {
      this.isLoading = false;
      this.showMessage = true;
    }, 4000);
  }
}
