import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { product } from '../service/product';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent {
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
