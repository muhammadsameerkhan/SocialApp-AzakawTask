import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login/sign-in', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule) },
  { path: 'feeds', loadChildren: () => import('./dashboard/feeds/feeds.module').then(mod => mod.FeedsModule) },
  { path: 'friends', loadChildren: () => import('./dashboard/friends/friends.module').then(mod => mod.FriendsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
