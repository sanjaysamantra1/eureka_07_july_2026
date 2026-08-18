import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UnitTestingDemo } from '../unit-testing-demo/unit-testing-demo';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ELEMENT_DATA } from './table_data';
@Component({
  selector: 'app-material-demo',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './material-demo.html',
  styleUrl: './material-demo.css',
})
export class MaterialDemo {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UnitTestingDemo, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  private _snackBar = inject(MatSnackBar);
  openSnackBar() {
    this._snackBar.open('Good Morning......');
  }
  // =======================

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
