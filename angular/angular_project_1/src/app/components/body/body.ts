import { DynamicForm } from './../dynamic-form/dynamic-form';
import { FormDemo1 } from './../form-demo1/form-demo1';
import { SubjectDemo1 } from './../subject-demo1/subject-demo1';
import { ObservableDemo3 } from './../observable-demo3/observable-demo3';
import { ObservableDemo2 } from './../observable-demo2/observable-demo2';
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
import { ObservableDemo4 } from '../observable-demo4/observable-demo4';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { SignalDemo3 } from '../signal-demo3/signal-demo3';
import { TemplateForm } from '../template-form/template-form';
import { ModelForm } from '../model-form/model-form';
import { SignalForm } from '../signal-form/signal-form';

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
    // ObservableDemo2
    // ObservableDemo3
    // ObservableDemo4
    // SubjectDemo1
    // SignalDemo1
    // SignalDemo2
    // SignalDemo3
    // FormDemo1
    // TemplateForm
    // ModelForm,
    // DynamicForm
    SignalForm
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag = true;
}
