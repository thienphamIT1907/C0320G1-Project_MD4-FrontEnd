import { UserUpdateComponent } from './user-update/user-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'cart', component: CartListComponent },
      { path: 'favorite', component: FavoriteListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'update', component: UserUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
