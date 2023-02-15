import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonoComponent } from './tesoreria/abono/abono.component';
import { PrincipalComponent } from './tesoreria/principal/principal.component';

const routes: Routes = [
  {path:'tesoreria', component: PrincipalComponent},
  {path:'abono', component: AbonoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
