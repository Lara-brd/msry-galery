import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './home/pages/list/list.component';
import { PhotoInfoComponent } from './home/pages/photo-info/photo-info.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'list',
        component:ListComponent
      },
      {
        path:'info',
        component:PhotoInfoComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports:[ RouterModule ]
})
export class GalleryRoutingModule { }
