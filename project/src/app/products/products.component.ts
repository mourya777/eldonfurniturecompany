import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productData: any;
  productCategory: any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {

    this.productService.get().subscribe((data: any) => {
      console.log(data)
      if (data) {
        this.productData = data

      } else {
        this.productData = []
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getProducts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getProducts();
  }

}
