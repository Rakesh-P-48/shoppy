import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  productId:any;
  productName:any;
  productprice:any;
  productCompany:any;
  productDescription:any;
  productImage:any;
  newProduct:any;
  productType:any;
  constructor(private service:ProductService,private router:Router){}
  addproduct(){
    this.newProduct={
      productId:this.productId,
      productName:this.productName,
      productprice:this.productprice,
      productCompany:this.productCompany,
      productDescription:this.productDescription,
      productImage:this.productImage,
      productType:this.productType
      }
  this.service.addproduct(this.newProduct);
  Swal.fire({
    title:"success",
    text:"product added successfully",
    icon:"success"
  })
  this.router.navigateByUrl("/admin/mobiles");
  }

}
