import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
  ],
  exports:[
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
  ]
})
export class MaterialModule { }
