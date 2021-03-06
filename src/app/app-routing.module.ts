import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ProductComponent} from './pages/main-page/product/product.component';

const routes: Routes = [
  {path: '' , redirectTo: 'product', pathMatch: 'full'},
  { path: 'product', children: [
      {path: '', component: ProductComponent},
      {path: ':id', children: [
          {path: '', component: ProductComponent},
          {path: ':isNew', component: ProductComponent }
        ]
      }
    ]
  },
  {path: 'about', component: AboutComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
