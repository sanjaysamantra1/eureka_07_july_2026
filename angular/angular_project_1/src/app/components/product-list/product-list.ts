import { Component } from '@angular/core';
import productData from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faInr } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { Charonly } from '../../directives/charonly';
import { DisableCopyPaste } from '../../directives/disable-copy-paste';

@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    Charonly,
    DisableCopyPaste
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;
  faStar = faStar;
  faInr = faInr;
  p = 1;

  openSweetAlert(){
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openSnackBar(){
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}
