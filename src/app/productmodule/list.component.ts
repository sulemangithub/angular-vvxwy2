import { Component,Input } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',    
})
export class ListComponent  {
  
  productlist = [];
  message:string = "";

  constructor(private service : ProductService)
  {
    this.productlist = service.getProducts();
  }

  addToCart(product)
  {
    this.service.addToCart(product);
    this.message = "Product added to cart";
  }

}
