import { Component } from '@angular/core';
import { from, range } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  ngOnInit() {
    // this.from_demo();
    this.range_demo();
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti']; // Normal Data
    let carsObs = from(cars);
    carsObs.subscribe((car) => console.log('Car:: ', car));
  }

  range_demo() {
    let num_Obs = range(10, 5);
    num_Obs.subscribe({
        next : (response)=>{console.log('Response: ',response)},
        error : (err)=>{console.log(err)},
        complete : ()=>{console.log('All data Received')},
    })
  }
}
