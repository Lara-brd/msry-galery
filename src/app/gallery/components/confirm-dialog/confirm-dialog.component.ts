import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Result } from 'src/app/shared/interfaces/apiResonse.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit, AfterViewInit{

  photo!:Result;
  instagram:boolean = true;
  // @ViewChild('tabsContentRef') tabsContentRef!:ElementRef;
 


 


  ////////////////////////////////////////////

  constructor (
    @Inject(MAT_DIALOG_DATA) public data:Result
    ){
    this.photo = data;
    
    if( !this.photo.user.instagram_username ){
      this.instagram = false;
      
    }
  }


  ngOnInit(): void {
   
  }


  ngAfterViewInit(): void {
    this.scrollto()
    
  }


  scrollto(){
    // this.tabsContentRef.nativeElement.scrollTop=0

  }







  



}
