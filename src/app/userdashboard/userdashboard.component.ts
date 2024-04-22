import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  img3="https://iconape.com/wp-content/png_logo_vector/avatar-4.png";

  user:any;
  username:any;
  cartLength:any;
  constructor(private router:Router,private cart:CartService) {}

  
  ngOnInit() {
    if(localStorage.getItem('user')!=null){
      this.user=JSON.parse(localStorage.getItem('user')||"{}")
      this.username=this.user.username;
    }
    else{
      this.router.navigateByUrl("/");
    }
  }
  }



