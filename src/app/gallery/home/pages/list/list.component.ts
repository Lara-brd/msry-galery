import { Component, Input, OnInit } from '@angular/core';
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
  
  ////////////////////////////////////////////
  
  constructor( private dataSvc:DataService ){}

  ngOnInit(): void {
    //suscripcion para cargar fotos random al inicio
    this.dataSvc.getRandomData().subscribe(photos => {
      this._listRandom = photos;
    })

  }
  
  //Método que se activa al hacer scroll
  onScroll(){
    this.pageRandom++;
    this.getNewRandomPhotos();

  }

  //Nuevas fotos RANDOM que cargan por página filtradas para evitar repeticiones
  getNewRandomPhotos(){
    this.dataSvc.getPhotosByPage(this.pageRandom)
    .subscribe( resp => {
      //repeticiones --> nueva array solo con ids
      var ids = new Set (this.listRandom.map(d => d.id));
      //a la respuesta aplica fiter. Recoge el contenido de listPhotos y se le añade la data filtrada ( retorna booleano).Solo añade data si no existe el id
      this._listRandom = [...this._listRandom, ...resp.filter(d => !ids.has(d.id))]
  })
  }


}
