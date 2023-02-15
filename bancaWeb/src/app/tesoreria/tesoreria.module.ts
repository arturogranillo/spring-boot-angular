import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbonoComponent } from './abono/abono.component';

import {FormsModule} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from "primeng/divider";
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
import { PrincipalComponent } from './principal/principal.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AbonoComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    RippleModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    InputMaskModule,
    InputNumberModule,
    RouterModule
  ],
  exports: [
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    RippleModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    InputMaskModule,
    InputNumberModule
  ]
})
export class TesoreriaModule { }
