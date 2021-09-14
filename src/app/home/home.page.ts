import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tokenRef = localStorage.getItem('tokenGRef');
  tokenMC = localStorage.getItem('tokenGMC');
  tokenMV = localStorage.getItem('tokenGMV');
  tokenEJ = localStorage.getItem('tokenGEJ');
  tokenPos = localStorage.getItem('tokenGPos');
  tokenBB = localStorage.getItem('tokenGBB');
  tokenBA = localStorage.getItem('tokenGBA');
  tokenPal = localStorage.getItem('tokenGPal');
  tokenPA = localStorage.getItem('tokenGPA');
  tokenPT = localStorage.getItem('tokenGPT');
  tokenEA = localStorage.getItem('tokenGEA');
  tokenAlb = localStorage.getItem('tokenGAlb');
  tokenLJ = localStorage.getItem('tokenGLJ');
  tokenCei = localStorage.getItem('tokenGCei');
  tokenJac = localStorage.getItem('tokenGJac');
  tokenCho = localStorage.getItem('tokenGCho');
  tokenJet = localStorage.getItem('tokenGJet');

  constructor() {}

  focos: any[] = [
    {id: 1, nombre: "Encender Todo", estado: false},
    {id: 2, nombre: "Reflectores", estado: (false || this.tokenRef)},
    {id: 3, nombre: "Muro Casa", estado: (false || this.tokenMC)},
    {id: 4, nombre: "Muro Verde", estado: (false || this.tokenMV)}, //Nuevo
    {id: 5, nombre: "Estacas Jardín", estado: (false || this.tokenEJ)}, //Nuevo
    {id: 6, nombre: "Poste", estado: (false || this.tokenPos)},
    {id: 7, nombre: "Barda Banos", estado: (false || this.tokenBB)},
    {id: 8, nombre: "Barda Alberca", estado: (false || this.tokenBA)},
    {id: 9, nombre: "Palapa", estado: (false || this.tokenPal)},
    {id: 10, nombre: "Piso Alberca", estado: (false || this.tokenPA)},
    {id: 11, nombre: "Piso Terraza", estado: (false || this.tokenPT)}, //Nuevo
    {id: 12, nombre: "Estacas Alberca", estado: (false || this.tokenEA)}, //Nuevo
    {id: 13, nombre: "Alberca", estado: (false || this.tokenAlb)}, //Nuevo
    {id: 14, nombre: "Luz Jacuzzi", estado: (false || this.tokenLJ)}, //Nuevo
    {id: 15, nombre: "Ceiba", estado: (false || this.tokenCei)}, //Nuevo
    {id: 16, nombre: "Jacuzzi", estado: (false || this.tokenJac)}, //Nuevo
    {id: 17, nombre: "Chorros", estado: (false || this.tokenCho)}, //Nuevo
    {id: 18, nombre: "Jets", estado: (false || this.tokenJet)} //Nuevo
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
          console.log("Encendido Reflectores", this.focos[1].estado);
          localStorage.setItem('tokenGRef',this.focos[1].estado);
          break;
        case "Muro Casa":
          console.log("Encendido Muro Casa", this.focos[2].estado);
          localStorage.setItem('tokenGMC',this.focos[2].estado);
          break;
        case "Muro Verde":
          console.log("Encendido Muro Verde", this.focos[3].estado);
          localStorage.setItem('tokenGMV',this.focos[3].estado);
          break;
        case "Estacas Jardín":
          console.log("Encendido Estacas Jardín", this.focos[4].estado);
          localStorage.setItem('tokenGEJ',this.focos[4].estado);
          break;
        case "Poste":
          console.log("Encendido Poste", this.focos[5].estado);
          localStorage.setItem('tokenGPos',this.focos[5].estado);
          break;
        case "Barda Banos":
          console.log("Encendido Barda Banos", this.focos[6].estado);
          localStorage.setItem('tokenGBB',this.focos[6].estado);
          break;
        case "Barda Alberca":
          console.log("Encendido Barda Alberca", this.focos[7].estado);
          localStorage.setItem('tokenGBA',this.focos[7].estado);
          break;
        case "Palapa":
          console.log("Encendido Palapa", this.focos[8].estado);
          localStorage.setItem('tokenGPal',this.focos[8].estado);
          break;
        case "Piso Alberca":
          console.log("Encendido Piso Alberca", this.focos[9].estado);
          localStorage.setItem('tokenGPA',this.focos[9].estado);
          break;
          case "Piso Terraza":
            console.log("Encendido Piso Terraza", this.focos[10].estado);
            localStorage.setItem('tokenGPT',this.focos[10].estado);
            break;
          case "Estacas Alberca":
            console.log("Encendido Estacas Alberca", this.focos[11].estado);
            localStorage.setItem('tokenGEA',this.focos[11].estado);
            break;
          case "Alberca":
            console.log("Encendido Alberca", this.focos[12].estado);
            localStorage.setItem('tokenGAlb',this.focos[12].estado);
            break;
          case "Luz Jacuzzi":
            console.log("Encendido Luz Jacuzzi", this.focos[13].estado);
            localStorage.setItem('tokenGLJ',this.focos[13].estado);
            break;
          case "Ceiba":
            console.log("Encendido Ceiba", this.focos[14].estado);
            localStorage.setItem('tokenGCei',this.focos[14].estado);
            break;
          case "Jacuzzi":
            console.log("Encendido Jacuzzi", this.focos[15].estado);
            localStorage.setItem('tokenGJac',this.focos[15].estado);
            break;
          case "Chorros":
            console.log("Encendido Chorros", this.focos[16].estado);
            localStorage.setItem('tokenGCho',this.focos[16].estado);
            break;
          case "Jets":
            console.log("Encendido Jets", this.focos[17].estado);
            localStorage.setItem('tokenGJet',this.focos[17].estado);
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
            console.log("Apagado Reflectores", this.focos[1].estado);
            localStorage.setItem('tokenGRef',this.focos[1].estado);
            break;
          case "Muro Casa":
            console.log("Apagado Muro Casa", this.focos[2].estado);
            localStorage.setItem('tokenGMC',this.focos[2].estado);
            break;
          case "Muro Verde":
            console.log("Apagado Muro Verde", this.focos[3].estado);
            localStorage.setItem('tokenGMV',this.focos[3].estado);
            break;
          case "Estacas Jardín":
            console.log("Apagado Estacas Jardín", this.focos[4].estado);
            localStorage.setItem('tokenGEJ',this.focos[4].estado);
            break;
          case "Poste":
            console.log("Apagado Poste", this.focos[5].estado);
            localStorage.setItem('tokenGPos',this.focos[5].estado);
            break;
          case "Barda Banos":
            console.log("Apagado Barda Banos", this.focos[6].estado);
            localStorage.setItem('tokenGBB',this.focos[6].estado);
            break;
          case "Barda Alberca":
            console.log("Apagado Barda Alberca", this.focos[7].estado);
            localStorage.setItem('tokenGBA',this.focos[7].estado);
            break;
          case "Palapa":
            console.log("Apagado Palapa", this.focos[8].estado);
            localStorage.setItem('tokenGPal',this.focos[8].estado);
            break;
          case "Piso Alberca":
            console.log("Apagado Piso Alberca", this.focos[9].estado);
            localStorage.setItem('tokenGPA',this.focos[9].estado);
            break;
            case "Piso Terraza":
              console.log("Apagado Piso Terraza", this.focos[10].estado);
              localStorage.setItem('tokenGPT',this.focos[10].estado);
              break;
            case "Estacas Alberca":
              console.log("Apagado Estacas Alberca", this.focos[11].estado);
              localStorage.setItem('tokenGEA',this.focos[11].estado);
              break;
            case "Alberca":
              console.log("Apagado Alberca", this.focos[12].estado);
              localStorage.setItem('tokenGAlb',this.focos[12].estado);
              break;
            case "Luz Jacuzzi":
              console.log("Apagado Luz Jacuzzi", this.focos[13].estado);
              localStorage.setItem('tokenGLJ',this.focos[13].estado);
              break;
            case "Ceiba":
              console.log("Apagado Ceiba", this.focos[14].estado);
              localStorage.setItem('tokenGCei',this.focos[14].estado);
              break;
            case "Jacuzzi":
              console.log("Apagado Jacuzzi", this.focos[15].estado);
              localStorage.setItem('tokenGJac',this.focos[15].estado);
              break;
            case "Chorros":
              console.log("Apagado Chorros", this.focos[16].estado);
              localStorage.setItem('tokenGCho',this.focos[16].estado);
              break;
            case "Jets":
              console.log("Apagado Jets", this.focos[17].estado);
              localStorage.setItem('tokenGJet',this.focos[17].estado);
              break;
      }
    }
  }

}
