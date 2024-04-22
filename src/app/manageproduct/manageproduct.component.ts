import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrl: './manageproduct.component.css'
})
export class ManageproductComponent {
  constructor(private service:ProductService){}
  products:any;
  ngOnInit(){
    this.service.getproducts().subscribe((result)=>{
      this.products=result;
      console.log(this.products);
    })
  }
  delete(p:any){
    this.service.deleteproduct(p);
    alert("product deleted successfully")
  }
  Tosave(p:any){
    p.productEdit=false;
    this.service.updateproduct(p);
    alert("product updated successfully")
  }
  Toupdate(p:any){
    p.productEdit=true;
  }
   }
