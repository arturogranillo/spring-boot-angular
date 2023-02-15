import { Component } from '@angular/core';
import { BancaApiService } from './services/banca-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario!: String;
  password!: String;

  constructor(private apiService: BancaApiService) {
  }

  login(){
    console.log(this.usuario);
    console.log(this.password);

    this.apiService.login(this.usuario, this.password).subscribe( respuesta => {
      console.log(respuesta);
    });

  }
}
