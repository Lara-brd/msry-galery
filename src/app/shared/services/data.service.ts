import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result, Search } from '../interfaces/apiResonse.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //unsplash date
  private key:string = "kc1LTGqcydpvmP_hn866YUHc5VTn_LKcMdo71u_gStg";
  private url:string = "https://api.unsplash.com/";


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

  getSearchPhotos( pageNum:number, query:string ){
    return this.http.get<Search>(`${this.url}search/photos?page=${pageNum}&query=${query}&client_id=${this.key}`)
  }
  


}
