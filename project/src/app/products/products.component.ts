import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  selectedCategory: string = '';
  filteredData: any[] = [];
  bedroomValue: string = '';
  categories = ['Living Room', 'Dining Room', 'Bedroom', 'Home Office'];

  value: any;
  productData2: any;
  // filteredData: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.getProducts()
  }


  getProducts() {

    this.productService.get().subscribe((data: any) => {

      if (data) {
        this.productData = data

        this.productCategory = data[0].categories


      } else {
        this.productData = []
      }
    })
  }

  getValue(e: any, item: any) {

    this.value = e.target.innerText

    // const pathParts = item.split('>');
    // this.bedroomValue = pathParts[1] ? pathParts[1].trim() : '';
    this.productService.get().subscribe((data: any) => {

      if (data) {
        this.productData2 = data
        this.filterDataByCategoryPath(this.value, this.productData2)
      }
    });
  }

  filterDataByCategoryPath(selectedCategoryPath: string, data: any) {

    this.filteredData = data.filter((item: any) => {


      return item.categories.some((category: any) => {

        return category.path.includes(selectedCategoryPath)
      })
    }
    );


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
