import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(){}
cartitems:product[]=[];
additemtocart(product:product){
  this.cartitems.push(product);
  console.log("cart"+product);
}
getitems(){
  return of(this.cartitems);
}
getlength(){
  return this.cartitems.length;
}
gettotal(){
  let total=0;
  for(let i=0; i<this.cartitems.length;i++){
 total+=this.cartitems[i].productPrice;
  }
  return total;
}
deletecartitems(prod:product){
  let res=this.cartitems.findIndex(p=>p.productName==prod.productName);
  this.cartitems.splice(res,1)
}
  }
