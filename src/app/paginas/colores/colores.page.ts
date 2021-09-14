import { Component, OnInit } from '@angular/core';
import { ConcentradoraServiceService } from '../../services/concentradora-service.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  //Obtener los datos de cual luz está encendida
  tokenRef = localStorage.getItem("tokenGRef");
  tokenMC = localStorage.getItem("tokenGMC");
  tokenPos = localStorage.getItem("tokenGPos");
  tokenBB = localStorage.getItem("tokenGBB");
  tokenBA = localStorage.getItem("tokenGBA");
  tokenPal = localStorage.getItem("tokenGPal");
  tokenPA = localStorage.getItem("tokenGPA");

  //Obtener los datos de cual color seleccionó
  tokenColor = localStorage.getItem("tokenGColor");

  //PRUEBA
  radioSelected= '';
  colores: any[] = [
    {id: 1, nombre: "Blanco"},
    {id: 2, nombre: "Celeste"},
    {id: 3, nombre: "Azul"},
    {id: 4, nombre: "Morado"},
    {id: 5, nombre: "Amarillo"},
    {id: 6, nombre: "Naranja"},
    {id: 7, nombre: "Rosa"},
    {id: 8, nombre: "Rojo"},
    {id: 9, nombre: "Verde"},
    {id: 10, nombre: "Dorado"}
  ]
  //TERMINA PRUEBA

  constructor(private concentradoraService: ConcentradoraServiceService) { }

  ngOnInit() {
  }

  cambiarColor(event){
    if(event.returnValue == true){
      switch(event.detail.value){
        case "Blanco":
          console.log("Blanco");
          this.concentradoraService.getServ().subscribe(res=>{console.log(res)});
          break;
        case "Celeste":
          localStorage.setItem('tokenGColor',event.detail.value);
          if(this.tokenRef == 'true'){
            console.log("Reflectores Celeste");
          }else if(this.tokenMC == 'true'){
            console.log("Muro Casa Celeste");
          }
          break;
        case "Azul":
          localStorage.setItem('tokenGColor',event.detail.value);
          event.returnValue = this.tokenColor;
          console.log(event.detail.value);
          break;
        case "Morado":
          localStorage.setItem('tokenGColor',event.detail.value);
          console.log(event.detail.value);
          break;
        case "Amarillo":
          localStorage.setItem('tokenGColor',event.detail.value);
          console.log(event.detail.value);
          break;
        case "Naranja":
          localStorage.setItem('tokenGColor',event.detail.value);
          console.log(event.detail.value);
          break;
        case "Rosa":
          localStorage.setItem('tokenGColor',event.detail.value);
          console.log(event.detail.value);
          break;
        case "Rojo":
          localStorage.setItem('tokenGColor',event.detail.value);
          console.log(event.detail.value);
          break;
        case "Verde":
          localStorage.setItem('tokenGColor',event.detail.value);
          console.log(event.detail.value);
          break;
        case "Dorado":
          localStorage.setItem('tokenGColor',event.detail.value);
          console.log(event.detail.value);
          break;
      }
    }
  }
}
