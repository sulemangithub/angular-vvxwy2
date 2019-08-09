import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {UserModule} from '../usermodule/user.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,UserModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers : [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
