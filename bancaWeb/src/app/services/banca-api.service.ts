import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BancaApiService {

  constructor(private httpClient: HttpClient) {}

  login(usuario:String, password:String) {
    return this.httpClient.post("https://arturogranillo-obscure-space-broccoli-6r974gvxrfr49-8080.preview.app.github.dev/auth/login", {
      nombre: usuario,
      contrasenia: password
    });
  }
}
