import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BancaApiService } from 'src/app/services/banca-api.service';

@Component({
  selector: 'app-abono',
  templateUrl: './abono.component.html',
  styleUrls: ['./abono.component.css']
})
export class AbonoComponent {

  cuenta!: String;
  monto!: String;

  constructor(private apiService: BancaApiService, private router: Router) {
  }

  abono(){
    console.log(this.cuenta);
    console.log(this.monto);

    this.apiService.abono(this.cuenta, this.monto).subscribe( (respuesta:any) => {
      alert("Su nuevo saldo es: " + respuesta.saldo);
      this.router.navigate(['/tesoreria']);
    }, (err) => {
      alert("No tiene autorización");
    });

  }
}
