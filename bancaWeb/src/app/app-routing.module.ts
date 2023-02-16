import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AbonoComponent } from './tesoreria/abono/abono.component';
import { PrincipalComponent } from './tesoreria/principal/principal.component';
import { RetiroComponent } from './tesoreria/retiro/retiro.component';
import { TransferenciaComponent } from './tesoreria/transferencia/transferencia.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'tesoreria', component: PrincipalComponent},
  {path:'abono', component: AbonoComponent},
  {path:'retiro', component: RetiroComponent},
  {path:'transferencia', component: TransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
