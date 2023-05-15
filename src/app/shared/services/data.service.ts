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

  //historial de búsquedas
  private _historial:string[] = [];

  get historial(){
    return [...this._historial];
  }



  ////////////////////////////////////////////

  constructor( private http:HttpClient ) { 
    //carga el historial de búsqueda desde localStorage
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

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

  //parametros query y numero de página
  getSearchPhotosByPage( pageNum:number, query:string ){
    return this.http.get<Search>(`${this.url}search/photos?page=${pageNum}&query=${query}&client_id=${this.key}`)
  }

  
  //añade elementos al historial de búsqueda
  buscarFotos(query:string = ''){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
  }

    //metodo para limpiar cache
  clearStorage():void{
    try{
      localStorage.clear();
      this._historial = [];
    }catch(error){
        console.log('Error cleaning localStorage', error);
    }
  }
  


}
