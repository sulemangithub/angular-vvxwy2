import {NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import {UserComponent} from './user.component';

import {ProductModule} from '../productmodule/product.module';

@NgModule({

  declarations :[UserComponent],
  imports :[BrowserModule,ProductModule],
  providers : [],
  exports :[UserComponent],
  bootstrap : [UserComponent]
})
export class UserModule
{

}