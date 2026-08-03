import { PipeDemo } from './../pipe-demo/pipe-demo';
import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { TaskList } from '../task-list/task-list';
import { ProductList } from '../product-list/product-list';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Login } from '../login/login';
import { Logout } from '../logout/logout';

@Component({
  selector: 'app-body',
  imports: [
    Databinding,
    DirectivesDemo,
    TaskList,
    ProductList,
    PipeDemo,
    ParentDemo,
    Login,
    Logout
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag = true;
}
