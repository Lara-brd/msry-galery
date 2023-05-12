import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import {MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Result } from 'src/app/shared/interfaces/apiResonse.interface';



@Component({
  selector: 'app-card-masonry',
  templateUrl: './card-masonry.component.html',
  styleUrls: ['./card-masonry.component.scss']
})
export class CardMasonryComponent {

  constructor( 
    private dataSvc:DataService,
    // inyectamos
    private matDialog:MatDialog
    ){}
  
  @Input() photo!:Result;
  selection:string=''; 


  //Cambiando medidas en el popup y mandando info
  onOpenDialogClick(photo:Result){
    this.matDialog.open(ConfirmDialogComponent,{
        data:photo,
        height: '100%',
        width: '100%',
        
      
    
        
        panelClass:'myDialogClass'

      })
  }
}
