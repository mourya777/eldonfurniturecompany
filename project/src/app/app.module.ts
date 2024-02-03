import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { TestComponent } from './test/test.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RemoveHtmlTagsPipe } from './remove-html-tags.pipe';
import { LoaderComponent } from './loader/loader.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { LoadingBarModule } from '@ngx-loading-bar/core';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'rgba(12,80,219,0.98)',
  bgsOpacity: 1,
  bgsPosition: POSITION.bottomRight,
  bgsSize: 40,
  bgsType: SPINNER.threeStrings,
  fgsColor: 'rgba(12,80,219,0.98)',
  fgsPosition: POSITION.centerCenter
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    TestComponent,
    ProductDetailComponent,
    RemoveHtmlTagsPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    LoadingBarModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule, // import this module for showing loader automatically when navigating between app routes
    NgxUiLoaderHttpModule,
  ],
  providers: [ProductService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
