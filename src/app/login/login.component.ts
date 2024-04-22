import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 username:any;
 password:any;
 user:any;
 constructor(private route:Router){}
 checkLogin(){
 
  if(this.username=='admin' && this.password=='12345')
     {
      this.user={
        username:this.username,
        password:this.password
      };
      this.route.navigateByUrl("/admin/home");
      localStorage.setItem('user',JSON.stringify(this.user));
    }
    else if(this.password=='98765')
    {
       this.user={
         username:this.username,
         password:this.password
       };
      this.route.navigateByUrl('/user/home');
       localStorage.setItem('user',JSON.stringify(this.user));
    }
    else
    {
      alert("Invalid details")
    }
   
 }
}