import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BancaApiService } from 'src/app/services/banca-api.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent {

  cuenta!: String;
  monto!: String;

  constructor(private apiService: BancaApiService, private router: Router) {
  }

  procesar(){
    console.log(this.cuenta);
    console.log(this.monto);

    this.apiService.retiro(this.cuenta, this.monto).subscribe( (respuesta:any) => {
      alert("Su nuevo saldo es: " + respuesta.saldo);
      this.router.navigate(['/tesoreria']);
    }, (err) => {
      alert("No tiene autorización");
    });

  }
}