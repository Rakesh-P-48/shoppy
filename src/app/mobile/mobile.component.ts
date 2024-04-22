import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from '../service/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent {
  constructor(private service:ProductService,private cart:CartService){}
product:any;
ngOnInit(){
  this.service.getproducts().subscribe((result)=>
  {
    this.product=result;
    console.log(this.product);
  })
}
addcart(pro:product){
  alert("your product has been added successfully");
  this.cart.additemtocart(pro)
}
  }


