import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products: Array<any>;
  public lowestPrice: string;

  constructor(
    protected productService: ProductService
  ) { }

  ngOnInit() {
    this.productService
      .getAllProducts()
      .subscribe(data => {
        const { products } = data;
        this.products = products;
        this.lowestPrice = products.reduce((min, p) => p.price.value < min ? p.price.value : min, this.products[0].price.value);
    });
  }

}
