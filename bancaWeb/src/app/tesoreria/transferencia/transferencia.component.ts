import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BancaApiService } from 'src/app/services/banca-api.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {

  cuentaOrigen!: String;
  cuentaDestino!: String;
  monto!: String;

  constructor(private apiService: BancaApiService, private router: Router) {
  }

  procesar(){
    this.apiService.transferencia(this.cuentaOrigen, this.cuentaDestino, this.monto).subscribe( (respuesta:any) => {
      alert("Su nuevo saldo es: " + respuesta.saldo);
      this.router.navigate(['/tesoreria']);
      console.log(respuesta);
    }, (err) => {
      alert(err.error);
      console.log(err);
    });

  }
}
