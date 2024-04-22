import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
constructor(private cart:CartService){}
cartitem:any;
total:any;
cartlength:any;
ngOnInit(){
  this.cart.getitems().subscribe((res)=>{
    this.cartitem=res;
    console.log(this.cartitem);
  })
}
ngDoCheck(){
  this.cartlength=this.cart.getlength();
  this.total=this.cart.gettotal();
}
delete(p:any){
  this.cart.deletecartitems(p);
  alert("product delete successfully");
}
additemtocart(p:any){
  this.additemtocart=this.cartitem;
}
rrrr(){
  Swal.fire({
    title:"success",
    text:"order Confirmed",
    icon:"success",
  })
}
}
