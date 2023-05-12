import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/shared/interfaces/apiResonse.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-photo-info',
  templateUrl: './photo-info.component.html',
  styleUrls: ['./photo-info.component.scss']
})
export class PhotoInfoComponent implements OnInit {

  photo!:Result;

  constructor( 
    private dataSvc:DataService,
    private router:Router,
    @Inject(DOCUMENT) private document:Document
    ){}
  
  @HostListener('window:scroll')
    onWindowSroll():void{
      const yOffSet = window.pageYOffset;
      const srollTop = this.document.documentElement.scrollTop;
      }

  ngOnInit(): void {
    // pagina con scroll arriba
    this.document.documentElement.scrollTop = 0; 
    this.photo = this.dataSvc.photoSelected;
  }


  onCloseSelected(){
    this.router.navigate(['/gallery/list'])

  }
  

}
