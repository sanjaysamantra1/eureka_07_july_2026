import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Service()
export class EmployeeService {
  employee_api = 'http://localhost:3000/employees';
  httpClient = inject(HttpClient);

  getAllEmployees(): Observable<Employee[]> {
    // service returns the response as it is to the component without changing
    // return this.httpClient.get<Employee[]>(this.employee_api);

    // Service should convert each response to Employee Object and return
    return this.httpClient.get<Employee[]>(this.employee_api).pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map((responseObj: Employee) => new Employee(responseObj));
      }),
    );

  }
}
