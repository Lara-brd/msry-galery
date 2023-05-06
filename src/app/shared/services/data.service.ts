import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../interfaces/apiResonse.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //unsplash date
  private key:string = "kc1LTGqcydpvmP_hn866YUHc5VTn_LKcMdo71u_gStg";
  private url:string = "https://api.unsplash.com/";

  private listRandomPhotos$ = this.getRandomData();
  listRandom$ = this.listRandomPhotos$;


  ////////////////////////////////////////////

  constructor( private http:HttpClient ) { }

  //RANDOM DATA
  //metodo para recibir imágenes y su información de la api unsplash devuelve observable y manda el array de datos a la propiedad listPhotos
  getRandomData(){
    return this.http.get<Result[]>(`${this.url}photos/?client_id=${ this.key}`)
  }


}