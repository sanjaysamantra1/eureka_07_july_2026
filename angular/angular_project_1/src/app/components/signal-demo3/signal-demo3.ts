import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo3',
  imports: [],
  templateUrl: './signal-demo3.html',
  styleUrl: './signal-demo3.css',
})
export class SignalDemo3 {
  country = signal('India');
  stateMap: any = {
    India: ['Karnataka', 'Tamilnadu', 'Maharastra', 'Andhra Pradesh'],
    USA: ['Texas', 'california', 'New York'],
    Canada: ['Ontario', 'Alberta'],
  };
  // depends on the country, but its writable
  selectedState = linkedSignal(() => {
    const country = this.country();
    return this.stateMap[country][0];
  });
  changeCountry(event: any) {
    this.country.set(event.target.value);
  }
  changeState(event: any) {
    this.selectedState.set(event.target.value);
  }
}
