import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { product } from '../service/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private service:ProductService,private cart:CartService){}
  product:any;
  addtocart(pro:product){
    this.cart.additemtocart(pro);
    alert("your product as been added to the cart");
   }
   ngOninit() {
    this.service.getproducts().subscribe((result)=>{
      this.product=result;
      console.log(this.product);
    })
    
   }

}
