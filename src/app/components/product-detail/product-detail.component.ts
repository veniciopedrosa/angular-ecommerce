import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: any;

  constructor(
    private route: ActivatedRoute,
    protected productService: ProductService
  ) { }

  ngOnInit() {
    const code = this.route.snapshot.paramMap.get('code');

    this.productService
        .getProduct(code)
        .subscribe(data => {
          this.product = data;
    })

  }

}
