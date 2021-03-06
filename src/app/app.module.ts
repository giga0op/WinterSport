import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './pages/main-page/banner/banner.component';
import { ProductComponent } from './pages/main-page/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatTooltipModule} from '@angular/material';
import { AboutComponent } from './about/about.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ProductComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
