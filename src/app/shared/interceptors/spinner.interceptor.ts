import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { SpinnerService } from "../services/spinner.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor{

  constructor( private spinnerSvc:SpinnerService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.spinnerSvc.show();
    return next.handle(req).pipe(
      //finalize --> devuelve observable y llama una función que se ejecuta cuando la respuesta acaba en observable o error 
      finalize(()=> this.spinnerSvc.hide()));
  }
}