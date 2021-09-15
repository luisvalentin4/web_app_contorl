import { isPlatformServer } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  public isDisabled: boolean = true;
  public ipServer: string = '';
  public puerto: string = '';

  tokenIpServer = localStorage.getItem("tokenIpServer");
  tokenPuerto = localStorage.getItem("tokenPuerto");
  checado: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  modificarIP(){
    this.isDisabled = !this.isDisabled;
    this.checado = !this.checado;
  }

  //Guardar los datos en localStorage
  //Se graban en el dispositivo para no perderlo al cambiar de página y poderlo llamar en otra
  guardarIP(){
    if(this.ipServer != "" ){
      localStorage.setItem('tokenIpServer', this.ipServer);
    }
    if(this.puerto != ""){
      localStorage.setItem('tokenPuerto', this.puerto);
    }
  }
}
