import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AbonoComponent } from './tesoreria/abono/abono.component';
import { PrincipalComponent } from './tesoreria/principal/principal.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'tesoreria', component: PrincipalComponent},
  {path:'abono', component: AbonoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
