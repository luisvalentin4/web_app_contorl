import { empty } from '@angular-devkit/schematics';
import { Component, ViewChild } from '@angular/core'; //ViewChild para Reorder

//Para Reorder
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Para Reorder
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  //Obtener el valor de los focos seleccionados
  tokenET = localStorage.getItem('tokenGET');
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

  tokenColor = localStorage.getItem('tokenGColor'); //Obtener el valor del color seleccionado

  focos: any[] = [
    {id: 1, nombre: "Encender Todo", estado: (false || this.tokenET)}, //Estado: false ó el dato que se seleccionó
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

  //Para Reorder
  
  orderBool = true;
  
  constructor() {}

  //Declara Array con los datos de los focos

  //COMIENZA PRUEBA REORDER
  doReorder(event){
    var reFocos = localStorage.getItem('misFocos');
    this.focos = JSON.parse (reFocos);

    this.focos = event.detail.complete(this.focos);

    localStorage.setItem('misFocos', JSON.stringify(this.focos));
    var reFocos = localStorage.getItem('misFocos');
    this.focos = JSON.parse (reFocos);
  }
  order(){
    console.log(this.focos);
    this.orderBool = !this.orderBool;
  }
  addStorage(){
    localStorage.setItem('misFocos', JSON.stringify(this.focos));
  }

  //TERMINA PRUEBA REORDER

  public encender(event, nombre: string){
    if(this.tokenColor == null){ //Si el valor de tokenColor es null colocarlo en blanco predeterminado
      localStorage.setItem('tokenGColor', "Blanco");
    }
    if(event.detail.checked == true){
      switch(nombre){
        case "Encender Todo":
          localStorage.setItem('tokenGET',this.focos[0].estado); //Se asigna el valor en localStorage del estado en dicho puesto del Array
          for(let foco of this.focos){
            var buscar = this.focos.findIndex((obj => obj.nombre == foco.nombre));
            this.focos[buscar].estado = true;
          }
          var cambiaTextOnOffTodo = this.focos.findIndex((camb => camb.nombre == "Encender Todo"));
          this.focos[cambiaTextOnOffTodo].nombre = "Apagar Todo";
          break;
        case "Reflectores":
          localStorage.setItem('tokenGRef',this.focos[1].estado); //Se asigna el valor en localStorage del estado en dicho puesto del Array
          console.log("Encendido ", this.focos[1].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Muro Casa":
          localStorage.setItem('tokenGMC',this.focos[2].estado);
          console.log("Encendido ", this.focos[2].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Muro Verde":
          localStorage.setItem('tokenGMV',this.focos[3].estado);
          console.log("Encendido ", this.focos[3].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Estacas Jardín":
          localStorage.setItem('tokenGEJ',this.focos[4].estado);
          console.log("Encendido ", this.focos[4].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Poste":
          localStorage.setItem('tokenGPos',this.focos[5].estado);
          console.log("Encendido ", this.focos[5].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Barda Banos":
          localStorage.setItem('tokenGBB',this.focos[6].estado);
          console.log("Encendido ", this.focos[6].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Barda Alberca":
          localStorage.setItem('tokenGBA',this.focos[7].estado);
          console.log("Encendido ", this.focos[7].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Palapa":
          localStorage.setItem('tokenGPal',this.focos[8].estado);
          console.log("Encendido ", this.focos[8].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Piso Alberca":
          localStorage.setItem('tokenGPA',this.focos[9].estado);
          console.log("Encendido ", this.focos[9].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Piso Terraza":
          localStorage.setItem('tokenGPT',this.focos[10].estado);
          console.log("Encendido ", this.focos[10].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Estacas Alberca":
          localStorage.setItem('tokenGEA',this.focos[11].estado);
          console.log("Encendido ", this.focos[11].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Alberca":
          localStorage.setItem('tokenGAlb',this.focos[12].estado);
          console.log("Encendido ", this.focos[12].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Luz Jacuzzi":
          localStorage.setItem('tokenGLJ',this.focos[13].estado);
          console.log("Encendido ", this.focos[13].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Ceiba":
          localStorage.setItem('tokenGCei',this.focos[14].estado);
          console.log("Encendido ", this.focos[14].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Jacuzzi":
          localStorage.setItem('tokenGJac',this.focos[15].estado);
          console.log("Encendido ", this.focos[15].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Chorros":
          localStorage.setItem('tokenGCho',this.focos[16].estado);
          console.log("Encendido ", this.focos[16].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Jets":
          localStorage.setItem('tokenGJet',this.focos[17].estado);
          console.log("Encendido ", this.focos[17].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
      }
    }else{
      switch(nombre){
        case "Apagar Todo":
          localStorage.setItem('tokenGET',this.focos[0].estado); //Se asigna el valor en localStorage del estado en dicho puesto del Array
          for(let foco of this.focos){
            var buscar = this.focos.findIndex((obj => obj.nombre == foco.nombre));
            this.focos[buscar].estado = false;
          }
          var cambiaTextOnOffTodo = this.focos.findIndex((camb => camb.nombre == "Apagar Todo"));
          this.focos[cambiaTextOnOffTodo].nombre = "Encender Todo";
          break;
          case "Reflectores":
            localStorage.setItem('tokenGRef',this.focos[1].estado); //Se asigna el valor en localStorage del estado en dicho puesto del Array
            console.log("Apagado ", this.focos[1].nombre);
            break;
          case "Muro Casa":
            localStorage.setItem('tokenGMC',this.focos[2].estado);
            console.log("Apagado ", this.focos[2].nombre);
            break;
          case "Muro Verde":
            localStorage.setItem('tokenGMV',this.focos[3].estado);
            console.log("Apagado ", this.focos[3].nombre);
            break;
          case "Estacas Jardín":
            localStorage.setItem('tokenGEJ',this.focos[4].estado);
            console.log("Apagado ", this.focos[4].nombre);
            break;
          case "Poste":
            localStorage.setItem('tokenGPos',this.focos[5].estado);
            console.log("Apagado ", this.focos[5].nombre);
            break;
          case "Barda Banos":
            localStorage.setItem('tokenGBB',this.focos[6].estado);
            console.log("Apagado ", this.focos[6].nombre);
            break;
          case "Barda Alberca":
            localStorage.setItem('tokenGBA',this.focos[7].estado);
            console.log("Apagado ", this.focos[7].nombre);
            break;
          case "Palapa":
            localStorage.setItem('tokenGPal',this.focos[8].estado);
            console.log("Apagado ", this.focos[8].nombre);
            break;
          case "Piso Alberca":
            localStorage.setItem('tokenGPA',this.focos[9].estado);
            console.log("Apagado ", this.focos[9].nombre);
            break;
            case "Piso Terraza":
              localStorage.setItem('tokenGPT',this.focos[10].estado);
              console.log("Apagado ", this.focos[10].nombre);
              break;
            case "Estacas Alberca":
              localStorage.setItem('tokenGEA',this.focos[11].estado);
              console.log("Apagado ", this.focos[11].nombre);
              break;
            case "Alberca":
              localStorage.setItem('tokenGAlb',this.focos[12].estado);
              console.log("Apagado ", this.focos[12].nombre);
              break;
            case "Luz Jacuzzi":
              localStorage.setItem('tokenGLJ',this.focos[13].estado);
              console.log("Apagado ", this.focos[13].nombre);
              break;
            case "Ceiba":
              localStorage.setItem('tokenGCei',this.focos[14].estado);
              console.log("Apagado ", this.focos[14].nombre);
              break;
            case "Jacuzzi":
              localStorage.setItem('tokenGJac',this.focos[15].estado);
              console.log("Apagado ", this.focos[15].nombre);
              break;
            case "Chorros":
              localStorage.setItem('tokenGCho',this.focos[16].estado);
              console.log("Apagado ", this.focos[16].nombre);
              break;
            case "Jets":
              localStorage.setItem('tokenGJet',this.focos[17].estado);
              console.log("Apagado ", this.focos[17].nombre);
              break;
      }
    }
  }
}
