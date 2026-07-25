import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  userName = 'Virat Kohli';
  img_url = 'https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png';

  flag = true;

  toggleFlag() {
    this.flag = !this.flag;
  }
}
