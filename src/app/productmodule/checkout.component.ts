import { Component,Input } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',    
})
export class CheckoutComponent  {

  totalBill:number = 0;

  constructor(private service:ProductService){
    this.getTotalBill();
  }

  getTotalBill()
  {
    this.totalBill = this.service.getTotalBill();
  }

}