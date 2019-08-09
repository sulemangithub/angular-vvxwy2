import { Component,Input } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',    
})
export class CartComponent  {

  mycart =[];

  constructor(private service:ProductService){    
    this.getCart();
  }

  getCart()
  {
    this.mycart = this.service.getMyCart();
  }

}