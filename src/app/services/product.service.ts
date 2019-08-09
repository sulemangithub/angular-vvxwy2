import {Injectable} from '@angular/core';

@Injectable()
export class ProductService
{
  products = [
    {id:18734,name:"Pen",category:"ST",price:10,mDate:"2019-09-09",eDate:"2020-09-09"},
    {id:18734,name:"Pen",category:"ST",price:10,mDate:"2019-09-09",eDate:"2020-09-09"},
    {id:18734,name:"Pen",category:"ST",price:10,mDate:"2019-09-09",eDate:"2020-09-09"},
    {id:18734,name:"Pen",category:"ST",price:10,mDate:"2019-09-09",eDate:"2020-09-09"},
    {id:18734,name:"Pen",category:"ST",price:10,mDate:"2019-09-09",eDate:"2020-09-09"}
  ];

  totalBill:number = 0;

  mycart = [];

  getProducts()
  {
   return this.products;
  }

  addToCart(product)
  {
    this.totalBill = this.totalBill + product.price;
    this.mycart.push(product);
  }

  getMyCart()
  {
    return this.mycart;
  }

  getTotalBill()
  {
    return this.totalBill;
  }

}