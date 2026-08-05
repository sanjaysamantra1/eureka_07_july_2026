import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class ProductService {
  product_api = 'https://fakestoreapi.com/products';
  httpClient = inject(HttpClient);

  getAllProducts() {
    return this.httpClient.get(this.product_api);
  }
}
