import {Component} from '@angular/core';

@Component({

  selector : "user-component",
  templateUrl : "./user.component.html"
})

export class UserComponent
{
  loginFlag:boolean = true;
  registerFlag:boolean = false;

  users = [
    {email:'a',password:"a",name:"test user",city:"",phone:""}
    ];
  message:string = "";

  loggedInUser = null;

  changeview(choice)
  {
    switch(choice)
    {
      case 1:
        this.loginFlag = true;
        this.registerFlag = false;
        break;
      case 2:
        this.loginFlag = false;
        this.registerFlag = true;
        break;
    }
  }

  register(email,password,name,city,phone){
    let user = {email:email,password:password,name:name,city:city,phone:phone};
    this.users.push(user);
    this.message = "Account created successfully";
  }

  authenticate(email,password){
    let flag = false;
    this.users.forEach(temp=>{
      if(temp.email == email && temp.password == password)
      {
        this.loggedInUser = temp;
        flag = true;        
      }
    });

    if(flag)
    {
      this.message = "Login successful";
    }
    else
    {
      this.message = "Invalid email or password";
    }
  }

  logout()
  {
    this.loggedInUser = null;
  }

}