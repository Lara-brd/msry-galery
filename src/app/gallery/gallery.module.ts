import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './home/pages/list/list.component';
import { PhotoInfoComponent } from './home/pages/photo-info/photo-info.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CardMasonryComponent } from './components/card-masonry/card-masonry.component';





@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    PhotoInfoComponent,
    HeaderComponent,
    CardMasonryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgxMasonryModule,
  ]
})
export class GalleryModule { }
