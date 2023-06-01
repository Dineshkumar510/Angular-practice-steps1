import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddnumbers = [];
  evennumbers = []

  Counter(passedNumber:number){
    if(passedNumber % 2 === 0){
      this.evennumbers.push(passedNumber);
  } else {
    this.oddnumbers.push(passedNumber);
  }
}

}
