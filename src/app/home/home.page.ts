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
    {id: 4, nombre: "Muro Verde", estado: false},
    {id: 5, nombre: "Estacas Jardín", estado: false},
    {id: 6, nombre: "Poste", estado: false},
    {id: 7, nombre: "Barda Banos", estado: false},
    {id: 8, nombre: "Barda Alberca", estado: false},
    {id: 9, nombre: "Palapa", estado: false},
    {id: 10, nombre: "Piso Alberca", estado: false},
    {id: 11, nombre: "Piso Terraza", estado: false},
    {id: 12, nombre: "Estacas Alberca", estado: false},
    {id: 13, nombre: "Alberca", estado: false},
    {id: 14, nombre: "Luz Jacuzzi", estado: false},
    {id: 15, nombre: "Ceiba", estado: false},
    {id: 16, nombre: "Jacuzzi", estado: false},
    {id: 17, nombre: "Chorros", estado: false},
    {id: 18, nombre: "Jets", estado: false}

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
        case "Muro Verde":
          console.log("Encendido Muro Verde");
          break;
        case "Estacas Jardín":
          console.log("Encendido Estacas Jardín");
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
        case "Piso Terraza":
          console.log("Encendido Piso Terraza");
          break;
       case "Estacas Alberca":
          console.log("Encendido Estacas Alberca");
          break;
        case "ALberca":
          console.log("Encendido Alberca");
          break;
        case "Luz Jacuzzi":
          console.log("Encendido Luz Jacuzzi");
          break;
        case "Ceiba":
          console.log("Encendido Ceiba");
          break;
        case "Jacuzzi":
          console.log("Encendido Jacuzzi");
          break;
        case "Chorros":
          console.log("Encendido Chorros");
          break;
        case "Jets":
          console.log("Encendido Jets");
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
          case "Muro Verde":
            console.log("Apagado Muro Verde");
            break;
          case "Estacas Jardín":
            console.log("Apagado Estacas Jardín");
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
          case "Piso Terraza":
            console.log("Apagado Piso Terraza");
            break;
         case "Estacas Alberca":
            console.log("Apagado Estacas Alberca");
            break;
          case "ALberca":
            console.log("Apagado Alberca");
            break;
          case "Luz Jacuzzi":
            console.log("Apagado Luz Jacuzzi");
            break;
          case "Ceiba":
            console.log("Apagado Ceiba");
            break;
          case "Jacuzzi":
            console.log("Apagado Jacuzzi");
            break;
          case "Chorros":
            console.log("Apagado Chorros");
            break;
          case "Jets":
            console.log("Apagado Jets");
            break;
      }
    }
  }

}
