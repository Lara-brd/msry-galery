import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { HomeComponent } from './home/home.component';
import { ListComponent } from './home/pages/list/list.component';
import { PhotoInfoComponent } from './home/pages/photo-info/photo-info.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CardMasonryComponent } from './components/card-masonry/card-masonry.component';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { MaterialModule } from '../shared/material/material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    PhotoInfoComponent,
    HeaderComponent,
    CardMasonryComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgxMasonryModule,
    InfiniteScrollModule,
    SpinnerModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents:[ ConfirmDialogComponent],
})
export class GalleryModule { }
