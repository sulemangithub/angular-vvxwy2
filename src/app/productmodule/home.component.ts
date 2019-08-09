import { Component,Input } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',    
})
export class HomeComponent  {
  
  @Input()
  loggedInUser;

  activeComponent:string = "list";

  changeView(componentstring)
  {
    this.activeComponent = componentstring;
  }

}
