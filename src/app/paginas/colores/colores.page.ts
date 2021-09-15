import { Component, OnInit } from '@angular/core';
import { ConcentradoraServiceService } from '../../services/concentradora-service.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  //Obtener en que estado se encuentran los focos
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

  //Obtener los datos de cual color seleccionó
  tokenColor = localStorage.getItem("tokenGColor"); 

  constructor(private concentradoraService: ConcentradoraServiceService) { }

  //Declaración de Array con los datos de los focos
  luces: any[] = [
    {id: 1, name: "Reflectores", nombre: this.tokenRef}, //Nombre: valorDeFoco
    {id: 2, name: "Muro Casa", nombre: this.tokenMC},
    {id: 3, name: "Muro Verde", nombre: this.tokenMV},
    {id: 4, name: "Estacas Jardín", nombre: this.tokenEJ},
    {id: 5, name: "Poste", nombre: this.tokenPos},
    {id: 6, name: "Barda Banos", nombre: this.tokenBB},
    {id: 7, name: "Barda Alberca", nombre: this.tokenBA},
    {id: 8, name: "Palapa", nombre: this.tokenPal},
    {id: 9, name: "Piso Alberca", nombre: this.tokenPA},
    {id: 10, name: "Piso Terraza", nombre: this.tokenPT},
    {id: 11, name: "Estacas Alberca", nombre: this.tokenEA},
    {id: 12, name: "Alberca", nombre: this.tokenAlb},
    {id: 13, name: "Luz Jacuzzi", nombre: this.tokenLJ},
    {id: 14, name: "Ceiba", nombre: this.tokenCei},
    {id: 15, name: "Jacuzzi", nombre: this.tokenJac},
    {id: 16, name: "Chorros", nombre: this.tokenCho},
    {id: 17, name: "Jets", nombre: this.tokenJet}
  ]

  ngOnInit() {
  }

  cambiarColor(event){
    if(event.returnValue == true){
      switch(event.detail.value){
        case "Blanco":
          localStorage.setItem('tokenGColor',event.detail.value); //Se asigna el color elegido
          //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
        case "Celeste":
          localStorage.setItem('tokenGColor',event.detail.value);
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
        case "Azul":
          localStorage.setItem('tokenGColor',event.detail.value);
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
        case "Morado":
          localStorage.setItem('tokenGColor',event.detail.value);
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
        case "Amarillo":
          localStorage.setItem('tokenGColor',event.detail.value);
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
        case "Naranja":
          localStorage.setItem('tokenGColor',event.detail.value);
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
        case "Rosa":
          localStorage.setItem('tokenGColor',event.detail.value);
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
        case "Rojo":
          localStorage.setItem('tokenGColor',event.detail.value);
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
        case "Verde":
          localStorage.setItem('tokenGColor',event.detail.value);
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
        case "Dorado":
          localStorage.setItem('tokenGColor',event.detail.value);
          for(let luz of this.luces){
            if(luz.nombre == 'true'){
              console.log("Enciende: ", luz.name, " color ", event.detail.value);
              //this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
            }
          }
          break;
      }
    }
  }
}
