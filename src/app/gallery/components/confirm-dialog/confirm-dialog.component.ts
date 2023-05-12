import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Result } from 'src/app/shared/interfaces/apiResonse.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  photo!:Result;
  instagram:boolean = true;

  constructor (@Inject(MAT_DIALOG_DATA) public data:Result){
    this.photo = data;

    if( !this.photo.user.instagram_username ){
      this.instagram = false;

    }

  
  }

}
