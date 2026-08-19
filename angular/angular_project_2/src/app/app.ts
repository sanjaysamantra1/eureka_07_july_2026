import { Component, signal } from '@angular/core';
import { UnitTestingDemo } from './components/unit-testing-demo/unit-testing-demo';
import { MaterialDemo } from './components/material-demo/material-demo';
import { Counter } from './components/counter/counter';
import { TodoCrud } from './components/todo-crud/todo-crud';

@Component({
  selector: 'app-root',
  imports: [
    UnitTestingDemo,
    MaterialDemo,
    Counter,
    TodoCrud
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project_2');
}
