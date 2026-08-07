import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  ngOnInit() {
    this.from_demo();
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti']; // Normal Data
    let carsObs = from(cars);
    carsObs.subscribe((car) => console.log('Car:: ', car));
  }
}
