import { Component } from '@angular/core';
import userData from './user_data';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr = userData;
}
