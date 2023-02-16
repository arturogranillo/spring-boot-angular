import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BancaApiService {

  public token!:String;

  constructor(private httpClient: HttpClient) {}

  login(usuario:String, password:String) {
    return this.httpClient.post("https://arturogranillo-obscure-space-broccoli-6r974gvxrfr49-8080.preview.app.github.dev/auth/login", {
      nombre: usuario,
      contrasenia: password
    });
  }

  abono(cuenta:String, monto:String) {
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.token)
    .set('content-type', 'application/json')
    .set('accept', 'application/hal+json');

    console.log(cuenta.replaceAll("-", ""));

    return this.httpClient.post("https://arturogranillo-obscure-space-broccoli-6r974gvxrfr49-8080.preview.app.github.dev/tesoreria/abono", {
      cuenta: cuenta.replaceAll("-", ""),
      monto: monto
    }, { 'headers': headers });
  }

  retiro(cuenta:String, monto:String) {
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.token)
    .set('content-type', 'application/json')
    .set('accept', 'application/hal+json');

    console.log(cuenta.replaceAll("-", ""));

    return this.httpClient.post("https://arturogranillo-obscure-space-broccoli-6r974gvxrfr49-8080.preview.app.github.dev/tesoreria/retiro", {
      cuenta: cuenta.replaceAll("-", ""),
      monto: monto
    }, { 'headers': headers });
  }

  transferencia(cuentaOrigen:String, cuentaDestino:String,monto:String) {
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.token)
    .set('content-type', 'application/json')
    .set('accept', 'application/hal+json');

    return this.httpClient.post("https://arturogranillo-obscure-space-broccoli-6r974gvxrfr49-8080.preview.app.github.dev/tesoreria/transferencia", {
      cuentaOrigen: cuentaOrigen.replaceAll("-", ""),
      cuentaDestino: cuentaDestino.replaceAll("-", ""),
      descripcion: "Transferencia",
      monto: monto
    }, { 'headers': headers });
  }
}
