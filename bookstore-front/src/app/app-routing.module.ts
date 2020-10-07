import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MsalGuard } from '@azure/msal-angular';


const routes: Routes = [
  { path: '' , component: HomeComponent,
  // canActivate: [MsalGuard]
},
  { path: 'orders' , component: OrdersComponent, canActivate: [MsalGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
