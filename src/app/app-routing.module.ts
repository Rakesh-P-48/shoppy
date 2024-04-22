import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { ViewComponent } from './view/view.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'user',component:UserdashboardComponent,
    children:[
      { path:'home',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'Managess',component:ManageProfileComponent},
      {path:'View',component:ViewComponent},
      {path:'cart',component:CartComponent},
      {path:'Mobiles',component:MobileComponent},
      {path:'Laptops',component:LaptopComponent},
      {path:'Tv',component:TvComponent}
      
    
     ]
  },
  {path:'admin', component:AdmindashboardComponent,
    children: [
      { path:'home',component:HomeComponent},
      {path:'add',component:AddproductsComponent },
      {path:'products',component:ProductsComponent},
      {path:'mobiles',component:MobileComponent},
      {path:'Laptops', component:LaptopComponent},
      {path:'Tv',component:TvComponent},
      {path:'View',component:ViewComponent},
      {path:'manage',component:ManageproductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

