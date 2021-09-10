import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  focos: any[] = [
    {id: 1, nombre: "Encender Todo", estado: false},
    {id: 2, nombre: "Reflectores", estado: false},
    {id: 3, nombre: "Muro Casa", estado: false},
    {id: 4, nombre: "Poste", estado: false},
    {id: 5, nombre: "Barda Banos", estado: false},
    {id: 6, nombre: "Barda Alberca", estado: false},
    {id: 7, nombre: "Palapa", estado: false},
    {id: 8, nombre: "Piso Alberca", estado: false}
  ]

  public encender(event, nombre: string){
    if(event.detail.checked == true){
      switch(nombre){
        case "Encender Todo":
          for(let foco of this.focos){
            var buscar = this.focos.findIndex((obj => obj.nombre == foco.nombre));
            this.focos[buscar].estado = true;
          }
          var cambiaTextOnOffTodo = this.focos.findIndex((camb => camb.nombre == "Encender Todo"));
          this.focos[cambiaTextOnOffTodo].nombre = "Apagar Todo";
          break;
        case "Reflectores":
          console.log("Encendido Reflectores");
          break;
        case "Muro Casa":
          console.log("Encendido Muro Casa");
          break;
        case "Poste":
          console.log("Encendido Poste");
          break;
        case "Barda Banos":
          console.log("Encendido Barda Banos");
          break;
        case "Barda Alberca":
          console.log("Encendido Barda Alberca");
          break;
        case "Palapa":
          console.log("Encendido Palapa");
          break;
        case "Piso Alberca":
          console.log("Encendido Piso Alberca");
          break;
      }
    }else{
      switch(nombre){
        case "Apagar Todo":
          for(let foco of this.focos){
            var buscar = this.focos.findIndex((obj => obj.nombre == foco.nombre));
            this.focos[buscar].estado = false;
          }
          var cambiaTextOnOffTodo = this.focos.findIndex((camb => camb.nombre == "Apagar Todo"));
          this.focos[cambiaTextOnOffTodo].nombre = "Encender Todo";
          break;
        case "Reflectores":
          console.log("Apagado Reflectores");
          break;
        case "Muro Casa":
          console.log("Apagado Muro Casa");
          break;
        case "Poste":
          console.log("Apagado Poste");
          break;
        case "Barda Banos":
          console.log("Apagado Barda Banos");
          break;
        case "Barda Alberca":
          console.log("Apagado Barda Alberca");
          break;
        case "Palapa":
          console.log("Apagado Palapa");
          break;
        case "Piso Alberca":
          console.log("Apagado Piso Alberca");
          break;
      }
    }
  }

}
