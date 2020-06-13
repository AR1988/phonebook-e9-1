import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./common/layout/auth-layout/auth-layout.component";
import {RegisterPageComponent} from "./auth/register-page/register-page.component";
import {ActivationPageComponent} from "./auth/activation-page/activation-page.component";
import {PendingPageComponent} from "./auth/pending-page/pending-page.component";


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      // { path: '', redirectTo: '/login', pathMatch: 'full' },
      {path: '', redirectTo: 'user/register', pathMatch: 'full'},
      {path: 'user/register', component: RegisterPageComponent},
      {path: 'user/activation', component: ActivationPageComponent},
      {path: 'user/pending/:token', component: PendingPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
