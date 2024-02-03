import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productData: any;
  fetchedData: any;
  foundItem: any;
  productItem: any;
  result: any;
  variant: any;
  desc: any;
  result2: any;
  category: any;
  categoriesArray: string[] = [];
  secondCategory: string | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.getProducts()
    const id = this.route.snapshot
    const customData = this.route.snapshot
    this.route.params.subscribe((data) => {

      if (data) {

        // this.feature_Id = data.id;
        // // this.getMenuList();
        this.getProducts(data);
      }
    });
  }
  getProducts(data?: any) {

    this.productService.get().subscribe((response: any) => {

      if (response) {

        this.productData = response
        if (this.productData) {

          // loop for product detail based on id
          this.productData.find((variant: any) => {
            console.log(variant)

            variant.variants.forEach((element: any) => {
              console.log(element)

              if (element.productId === data.id) {

                this.productItem = element;
                this.category = Object.values(variant.categories)
                console.log(this.category[0].path)
                this.categoriesArray = this.category[0].path.split(' > ');
                console.log(this.categoriesArray)
                this.secondCategory = this.categoriesArray[1];
                this.desc = variant.description
                this.result = variant.media.mainImages
                this.result2 = variant.media.additionalImages

                return variant;
              } else {
                // 
              }
              console.log(this.productItem)
              // this.fetchedData = this.productItem
              return this.productItem
            });
            console.log("result" + this.productItem)
            this.productItem = this.productItem

          })

          // for loop for fetch id based product variant details
          this.productData.find((variant: any) => {

            variant.variants.forEach((element: any) => {
              console.log(element)
              if (element.productId === data.id) {

                this.foundItem = element;
                return this.foundItem;
              } else {
                // 
              }
              console.log(this.foundItem)
              // this.fetchedData = this.foundItem
              return this.foundItem
            });
            console.log("sub result" + this.foundItem)
            return this.foundItem

          });
          console.log("result" + this.foundItem)

          this.productData = this.foundItem


        }


      } else {
        this.productData = []
      }
    })
  }
}


