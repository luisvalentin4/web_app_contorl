import { empty } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { ConcentradoraServiceService } from '../services/concentradora-service.service';

//Para JSON
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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

  focosNew: any = []; //JSON

  solicon: string;
  
  constructor(private http: HttpClient, private concentradoraService: ConcentradoraServiceService,){}

  ngOnInit(){
    this.getAlumbrado().subscribe(res=>{
        console.log("Res",res);
        this.focosNew = res;
      }
    )
  }

  //COMIENZA JSON
  getAlumbrado(){
    return this.http
    .get("assets/archivos/alumbrado.json")
    .pipe(
      map(
        (res:any)=>{
          return res.luces;
        }
      )
    )
  }
  //TERMINA JSON

  //COMIENZA COLORES
  public colores(){
    this.solicon = this.tokenColor;
  }
  //TERMINA COLORES

  public encender(event, nombre: string){
    if(this.tokenColor == null){ //Si el valor de tokenColor es null colocarlo en blanco predeterminado
      localStorage.setItem('tokenGColor', "Blanco");
    }
    this.tokenColor = localStorage.getItem('tokenGColor');
    if(event.detail.checked == true){
      switch(nombre){
        case "Encender Todo":
          localStorage.setItem('tokenGET',this.focosNew[0].estado); //Se asigna el valor en localStorage del estado en dicho puesto del Array
          for(let foco of this.focosNew){
            var buscar = this.focosNew.findIndex((obj => obj.nombre == foco.nombre));
            this.focosNew[buscar].estado = true;
          }
          var cambiaTextOnOffTodo = this.focosNew.findIndex((camb => camb.nombre == "Encender Todo"));
          this.focosNew[cambiaTextOnOffTodo].nombre = "Apagar Todo";
          break;
        case "Reflectores":
          localStorage.setItem('tokenGRef',this.focosNew[1].estado); //Se asigna el valor en localStorage del estado en dicho puesto del Array
          console.log("Encendido ", this.focosNew[1].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Muro Casa":
          localStorage.setItem('tokenGMC',this.focosNew[2].estado);
          console.log("Encendido ", this.focosNew[2].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Muro Verde":
          localStorage.setItem('tokenGMV',this.focosNew[3].estado);
          console.log("Encendido ", this.focosNew[3].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Estacas Jardín":
          localStorage.setItem('tokenGEJ',this.focosNew[4].estado);
          console.log("Encendido ", this.focosNew[4].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Poste":
          localStorage.setItem('tokenGPos',this.focosNew[5].estado);
          console.log("Encendido ", this.focosNew[5].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Barda Banos":
          localStorage.setItem('tokenGBB',this.focosNew[6].estado);
          console.log("Encendido ", this.focosNew[6].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Barda Alberca":
          localStorage.setItem('tokenGBA',this.focosNew[7].estado);
          console.log("Encendido ", this.focosNew[7].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Palapa":
          localStorage.setItem('tokenGPal',this.focosNew[8].estado);
          console.log("Encendido ", this.focosNew[8].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Piso Alberca":
          localStorage.setItem('tokenGPA',this.focosNew[9].estado);
          console.log("Encendido ", this.focosNew[9].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Piso Terraza":
          localStorage.setItem('tokenGPT',this.focosNew[10].estado);
          console.log("Encendido ", this.focosNew[10].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Estacas Alberca":
          localStorage.setItem('tokenGEA',this.focosNew[11].estado);
          console.log("Encendido ", this.focosNew[11].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Alberca":
          localStorage.setItem('tokenGAlb',this.focosNew[12].estado);
          console.log("Encendido ", this.focosNew[12].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Luz Jacuzzi":
          localStorage.setItem('tokenGLJ',this.focosNew[13].estado);
          console.log("Encendido ", this.focosNew[13].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Ceiba":
          localStorage.setItem('tokenGCei',this.focosNew[14].estado);
          console.log("Encendido ", this.focosNew[14].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Jacuzzi":
          localStorage.setItem('tokenGJac',this.focosNew[15].estado);
          console.log("Encendido ", this.focosNew[15].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Chorros":
          localStorage.setItem('tokenGCho',this.focosNew[16].estado);
          console.log("Encendido ", this.focosNew[16].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Jets":
          localStorage.setItem('tokenGJet',this.focosNew[17].estado);
          console.log("Encendido ", this.focosNew[17].nombre, " color ", this.tokenColor);
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
      }
    }else{
      switch(nombre){
        case "Apagar Todo":
          localStorage.setItem('tokenGET',this.focosNew[0].estado); //Se asigna el valor en localStorage del estado en dicho puesto del Array
          for(let foco of this.focosNew){
            var buscar = this.focosNew.findIndex((obj => obj.nombre == foco.nombre));
            this.focosNew[buscar].estado = false;
          }
          var cambiaTextOnOffTodo = this.focosNew.findIndex((camb => camb.nombre == "Apagar Todo"));
          this.focosNew[cambiaTextOnOffTodo].nombre = "Encender Todo";
          break;
          case "Reflectores":
            localStorage.setItem('tokenGRef',this.focosNew[1].estado); //Se asigna el valor en localStorage del estado en dicho puesto del Array
            console.log("Apagado ", this.focosNew[1].nombre);
            break;
          case "Muro Casa":
            localStorage.setItem('tokenGMC',this.focosNew[2].estado);
            console.log("Apagado ", this.focosNew[2].nombre);
            break;
          case "Muro Verde":
            localStorage.setItem('tokenGMV',this.focosNew[3].estado);
            console.log("Apagado ", this.focosNew[3].nombre);
            break;
          case "Estacas Jardín":
            localStorage.setItem('tokenGEJ',this.focosNew[4].estado);
            console.log("Apagado ", this.focosNew[4].nombre);
            break;
          case "Poste":
            localStorage.setItem('tokenGPos',this.focosNew[5].estado);
            console.log("Apagado ", this.focosNew[5].nombre);
            break;
          case "Barda Banos":
            localStorage.setItem('tokenGBB',this.focosNew[6].estado);
            console.log("Apagado ", this.focosNew[6].nombre);
            break;
          case "Barda Alberca":
            localStorage.setItem('tokenGBA',this.focosNew[7].estado);
            console.log("Apagado ", this.focosNew[7].nombre);
            break;
          case "Palapa":
            localStorage.setItem('tokenGPal',this.focosNew[8].estado);
            console.log("Apagado ", this.focosNew[8].nombre);
            break;
          case "Piso Alberca":
            localStorage.setItem('tokenGPA',this.focosNew[9].estado);
            console.log("Apagado ", this.focosNew[9].nombre);
            break;
            case "Piso Terraza":
              localStorage.setItem('tokenGPT',this.focosNew[10].estado);
              console.log("Apagado ", this.focosNew[10].nombre);
              break;
            case "Estacas Alberca":
              localStorage.setItem('tokenGEA',this.focosNew[11].estado);
              console.log("Apagado ", this.focosNew[11].nombre);
              break;
            case "Alberca":
              localStorage.setItem('tokenGAlb',this.focosNew[12].estado);
              console.log("Apagado ", this.focosNew[12].nombre);
              break;
            case "Luz Jacuzzi":
              localStorage.setItem('tokenGLJ',this.focosNew[13].estado);
              console.log("Apagado ", this.focosNew[13].nombre);
              break;
            case "Ceiba":
              localStorage.setItem('tokenGCei',this.focosNew[14].estado);
              console.log("Apagado ", this.focosNew[14].nombre);
              break;
            case "Jacuzzi":
              localStorage.setItem('tokenGJac',this.focosNew[15].estado);
              console.log("Apagado ", this.focosNew[15].nombre);
              break;
            case "Chorros":
              localStorage.setItem('tokenGCho',this.focosNew[16].estado);
              console.log("Apagado ", this.focosNew[16].nombre);
              break;
            case "Jets":
              localStorage.setItem('tokenGJet',this.focosNew[17].estado);
              console.log("Apagado ", this.focosNew[17].nombre);
              break;
      }
    }
  }
}