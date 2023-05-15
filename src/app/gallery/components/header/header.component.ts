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
  noList:boolean = true;

  /////////////////////////////////////////////

  constructor( private dataSvc:DataService ){}

  ngOnInit(): void {
    this.historial = this.dataSvc.historial
    if(this.historial.length ==0){console.log('no length')}
    console.log(this.historial.length ==0)

  }


  //Setea la información de la búsqueda y manda la búsqueda a random
  setQueryInfo(){
    this.dataSvc.getSearchPhotosByPage(1,this.value)
      .subscribe(data => {
        this.listPhotos = data.results;
        this.dataSvc.setQuery({search:this.value, onRandom:false, list:data.results})
      });
      
      this.dataSvc.buscarFotos(this.value);
      this.historial = this.dataSvc.historial;

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

    onClearList(){
      this.dataSvc.clearStorage();
      this.historial = this.dataSvc.historial;
    }


}
