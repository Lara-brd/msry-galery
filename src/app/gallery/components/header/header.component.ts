import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/shared/interfaces/apiResonse.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  value:string = '';
  listPhotos:Result[]=[];
  historial:string[]=[];
  emptyList:boolean = false;

  /////////////////////////////////////////////

  constructor( private dataSvc:DataService ){}

  ngOnInit(): void {
    this.historial = this.dataSvc.historial
    if(this.historial.length == 0){
      this.emptyList = true;
    }
  }


  //Setea la información de la búsqueda y manda la búsqueda a random
  setQueryInfo(){
    this.dataSvc.getSearchPhotosByPage(1,this.value)
      .subscribe(data => {
        if( data.total === 0){
          this.value = 'no Results';
        }else{
          this.listPhotos = data.results;
          this.dataSvc.setQuery({search:this.value, onRandom:false, list:data.results});
          this.dataSvc.addQueryToHistorial(this.value);
          this.historial = this.dataSvc.historial;
          this.emptyList = false;
        }
      });

    }


    resetInfo(){
      this.dataSvc.setQuery({search:'', onRandom:true, list:[]});
      this.value ='';
    }


    //Search from searchList
    onSearchByQuery(query:string){
      this.value = query;
      this.setQueryInfo()
    }

    //limpia el historial de local storage
    onClearList(){
      this.dataSvc.clearStorage();
      this.historial = this.dataSvc.historial;
      this.emptyList = true;
    }


}
