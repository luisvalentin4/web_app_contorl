import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  public isDisabled: boolean = true;
  public ipServer: string;
  public puerto: string;

  constructor() { }

  ngOnInit() {
  }

  modificarIP(){
    this.isDisabled = !this.isDisabled;
  }
  guardarIP(){

  }

}
