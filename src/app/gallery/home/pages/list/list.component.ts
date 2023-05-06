import { Component, Input } from '@angular/core';
import { Result } from 'src/app/shared/interfaces/apiResonse.interface';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  listRandom$ = this.dataSvc.listRandom$;

  ////////////////////////////////////////////

  constructor( private dataSvc:DataService ){}

}
