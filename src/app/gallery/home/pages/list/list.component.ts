import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Result } from 'src/app/shared/interfaces/apiResonse.interface';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private _listRandom:Result[] = [];
  get listRandom(){
    return [...this._listRandom]
  }
  pageRandom:number = 1;

  // up button
  showButton:boolean = false;
  
  ////////////////////////////////////////////
  
  constructor( 
    private dataSvc:DataService,
    @Inject(DOCUMENT) private document:Document
    ){}

  ngOnInit(): void {
    //suscripcion para cargar fotos random al inicio
    this.dataSvc.getRandomData().subscribe(photos => {
      this._listRandom = photos;
    })
  }


  //HOSTLISTENER para funcionamiento de up button
  // Con hostlistener escuchamos el scroll
  @HostListener('window:scroll')
    onWindowScroll():void{
      //yOffset numero de pixeles desplazados
      const yOffSet = window.pageYOffset;
      const srollTop = this.document.documentElement.scrollTop;
      //si los pixeles desplazados o el scrolltop es mallor de 500px enseña el boton
      this.showButton = (yOffSet || srollTop)>500;
    }

    
  
    onScrollTop(){
      this.document.documentElement.scrollTop = 0; 
    }
    
    
    
    
  //scroll ininito
  //Método que se activa al hacer scroll
  onScroll(){
    this.pageRandom++;
    this.getNewRandomPhotos();

  }

  //Nuevas fotos RANDOM que cargan por página filtradas para evitar repeticiones
  getNewRandomPhotos(){
    this.dataSvc.getPhotosByPage(this.pageRandom)
    .subscribe( resp => {
      console.log(resp)
      //repeticiones --> nueva array solo con ids
      var ids = new Set (this.listRandom.map(d => d.id));
      //a la respuesta aplica fiter. Recoge el contenido de listPhotos y se le añade la data filtrada ( retorna booleano).Solo añade data si no existe el id
      this._listRandom = [...this._listRandom, ...resp.filter(d => !ids.has(d.id))]
  })
  }


}
