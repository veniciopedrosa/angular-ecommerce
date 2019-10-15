import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() products;
  public show = false;
  public index;

  constructor(private router: Router) {}

  public mouseHover(i) {
    this.index = i;
    this.show = !this.show;
  }

  public selectProduct(productCode) {
    this.router.navigate([`/product/${productCode}`]);
  }

}
