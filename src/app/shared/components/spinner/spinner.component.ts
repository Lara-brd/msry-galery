import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',

  template:`
  <!--solo se mostrará el spinner si isLoading$ es true-->
  <div class="overlay" *ngIf="isLoading$ | async">
    <div class="lds-ripple"><div></div><div></div></div>
  </div>
  `,
  
  styleUrls: ['./spinner.component.scss']
})


export class SpinnerComponent {

  isLoading$ = this.spinnerSvc.isLoading$;

  constructor (private spinnerSvc:SpinnerService){}

}
