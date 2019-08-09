import {NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import {HomeComponent} from './home.component';
import {ProductService} from '../services/product.service';
import {ListComponent} from './list.component';
import {CartComponent} from './cart.component';
import {CheckoutComponent} from './checkout.component';

@NgModule({

  declarations :[HomeComponent,ListComponent,CartComponent,CheckoutComponent],
  imports :[BrowserModule],
  providers : [ProductService],
  exports :[HomeComponent,ListComponent],
  bootstrap : [HomeComponent]
})
export class ProductModule
{

}