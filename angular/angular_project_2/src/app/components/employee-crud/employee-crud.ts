import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchEmployees, deleteEmployee } from '../../actions/employee.actions';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-crud',
  imports: [CommonModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  employees$: Observable<Employee[]> | undefined;
  constructor(private store: Store<any>) {
    this.employees$ = this.store.select((state) => {
      console.log('Selector...')
      return state.employeeData;
    }); // selector
    console.log( this.employees$)
  }
  ngOnInit() {
    // this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
    this.store.dispatch(fetchEmployees());
  }
  deleteEmp(id: any) {
    const flag = confirm('Are you sure, You want to delete this record?');
    if (flag) {
      this.store.dispatch(deleteEmployee({ id }));
    }
  }
}
