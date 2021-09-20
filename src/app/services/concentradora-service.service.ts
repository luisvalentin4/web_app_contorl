import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConcentradoraServiceService {

  constructor(private http: HttpClient) { }

  public getServ(){
    return this.http.get("http://192.168.0.6:81/concentradora/turnOffActuador(parametro)");
  }
  
}
