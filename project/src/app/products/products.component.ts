import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

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
  @ViewChild('livingRoomLink', { static: false }) livingRoomLink: ElementRef | any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts()
  }
  ngAfterViewInit() {
    // Access the text content of the anchor tag
    const livingRoomText = this.livingRoomLink.nativeElement.textContent;

    console.log('Living Room:', livingRoomText);
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

  send() {
    this.router.navigateByUrl('/product-detail')
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
