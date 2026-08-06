import { Observable } from 'rxjs';
import { EmployeeService } from './../../services/employee-service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list-http',
  imports: [CommonModule],
  templateUrl: './employee-list-http.html',
  styleUrl: './employee-list-http.css',
})
export class EmployeeListHttp {
  employeeService = inject(EmployeeService);
  employeeData: Observable<Employee[]> | undefined;

  ngOnInit() {
    this.employeeData = this.employeeService.getAllEmployees();

    this.employeeService.getAllEmployees().subscribe((response) => {
      console.log('Employee Response:: ', response);
    });
  }
}
