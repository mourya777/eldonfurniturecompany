import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productData: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {



    this.getProducts()

    
  }

  getProducts() {

    this.productService.get().subscribe((data: any) => {

      if (data) {
        this.productData = data



      } else {
        this.productData = []
      }
    })
  }
}


