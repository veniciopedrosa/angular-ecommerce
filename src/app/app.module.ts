import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { ProductsComponent } from './components/shared/products/products.component';
import { HttpHelper } from './helpers/http.helpers';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderService } from './services/loader/loader.service';
import { ProductService } from './services/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    ProductsComponent,
    BannerComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    LoaderService,
    HttpHelper,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, 
      multi: true
    },
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
