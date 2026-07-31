import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining-pipe';
import { MySortPipe } from '../../pipes/my-sort-pipe';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule, FormsModule, RemainingPipe,MySortPipe],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  userName = 'sachIn teNdUlkAr';
  salary = 5000;
  dateObj = new Date();

  user = { name: 'Sanjay', role: 'Trainer', address: 'Bangalore' };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];

  msg = 'Hello';

  arr = [10, 50, 20, 30, 40];
}
