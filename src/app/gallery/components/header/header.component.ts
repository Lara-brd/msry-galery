import { Component } from '@angular/core';
import { Result } from 'src/app/shared/interfaces/apiResonse.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  value:string = '';
  listPhotos:Result[]=[];

  constructor( private dataSvc:DataService ){}

  //Setea la información de la búsqueda y manda la búsqueda a random
  setQueryInfo(){
    this.dataSvc.getSearchPhotosByPage(1,this.value)
      .subscribe(data => {
        this.listPhotos = data.results;
        this.dataSvc.setQuery({search:this.value, onRandom:false, list:data.results})
      }) 
    }

    resetInfo(){
      this.dataSvc.setQuery({search:'', onRandom:true, list:[]});
      this.value ='';

    }
}
