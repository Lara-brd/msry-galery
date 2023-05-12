import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Query, Result, Search } from '../interfaces/apiResonse.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


//propiedad para inicializar la query
const initQuery = {
  search:'',
  onRandom:true,
  list:[]
}

@Injectable({
  providedIn: 'root'
})


export class DataService {

  //unsplash date
  private key:string = "kc1LTGqcydpvmP_hn866YUHc5VTn_LKcMdo71u_gStg";
  private url:string = "https://api.unsplash.com/";


  
  //SEARCH observer___________

  private query$ = new BehaviorSubject<Query>(initQuery);

  //Recoge información de la búsqueda
  get selectedQuery$():Observable<Query>{
    return this.query$.asObservable();
  }

  //Setea info
  setQuery( object:Query){
    this.query$.next(object)
  }

  photoSelected:any;



  ////////////////////////////////////////////

  constructor( private http:HttpClient ) { }

  //RANDOM DATA
  //metodo para recibir imágenes y su información de la api unsplash devuelve observable.
  getRandomData(){
    return this.http.get<Result[]>(`${this.url}photos/?client_id=${ this.key}`)  
  }

  //RANDOM PAGE
  //buscando por página
  getPhotosByPage( pageNum:number){
    return this.http.get<Result[]>(`${this.url}photos/?client_id=${ this.key }&page=${pageNum}`)
  }

  getSearchPhotosByPage( pageNum:number, query:string ){
    return this.http.get<Search>(`${this.url}search/photos?page=${pageNum}&query=${query}&client_id=${this.key}`)
  }
  


}
