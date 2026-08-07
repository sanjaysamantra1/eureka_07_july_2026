import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, range } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [CommonModule],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  numbers = interval(1000);

  // when you want to create 1 observable out of another observable, we use pipe
  even_numbers = this.numbers.pipe(filter((val) => val % 2 == 0));
  square_numbers = this.numbers.pipe(map((val) => val * val));

  // digital clock, Note: observable varibales should end with $
  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));

  ngOnInit() {
    // this.from_demo();
    // this.range_demo();
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti']; // Normal Data
    let carsObs = from(cars);
    carsObs.subscribe((car) => console.log('Car:: ', car));
  }

  range_demo() {
    let num_Obs = range(10, 5);
    num_Obs.subscribe({
      next: (response) => {
        console.log('Response: ', response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('All data Received');
      },
    });
  }
}
