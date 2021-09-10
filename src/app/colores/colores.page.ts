import { Component, OnInit } from '@angular/core';
import { ConcentradoraServiceService } from '../services/concentradora-service.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

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
          console.log("Celeste");
          break;
        case "Azul":
          console.log("Azul");
          break;
        case "Morado":
          console.log("Morado");
          break;
        case "Amarillo":
          console.log("Amarillo");
          break;
        case "Naranja":
          console.log("Naranja");
          break;
        case "Rosa":
          console.log("Rosa");
          break;
        case "Rojo":
          console.log("Rojo");
          break;
        case "Verde":
          console.log("Verde");
          break;
        case "Dorado":
          console.log("Dorado");
          break;
      }
    }
  }
}
