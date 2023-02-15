import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BancaApiService } from '../services/banca-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario!: String;
  password!: String;

  constructor(private apiService: BancaApiService, private router: Router) {
  }

  login(){
    console.log(this.usuario);
    console.log(this.password);

    this.apiService.login(this.usuario, this.password).subscribe( respuesta => {
      alert("Bienvenido");
      this.router.navigate(['/tesoreria']);
    }, (err) => {
      alert(err.error.mensaje);
    });

  }
}