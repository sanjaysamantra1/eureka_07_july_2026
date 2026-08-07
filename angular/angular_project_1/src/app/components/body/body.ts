import { PipeDemo } from './../pipe-demo/pipe-demo';
import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { TaskList } from '../task-list/task-list';
import { ProductList } from '../product-list/product-list';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Login } from '../login/login';
import { Logout } from '../logout/logout';
import { CommentList } from '../comment-list/comment-list';
import { ProductListHttp } from '../product-list-http/product-list-http';
import { EmployeeListHttp } from '../employee-list-http/employee-list-http';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // DirectivesDemo,
    // TaskList,
    // ProductList,
    // PipeDemo,
    // ParentDemo,
    // Login,
    // Logout,
    // CommentList,
    // ProductListHttp,
    // EmployeeListHttp
    // ObservableDemo1
    ObservableDemo2
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag = true;
}
