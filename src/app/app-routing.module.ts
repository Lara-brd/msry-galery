import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './gallery/home/home.component';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

const routes: Routes = [
  {
    path:'gallery',
    loadChildren:()=>import('./gallery/gallery.module').then(m => m.GalleryModule)
  },
  { 
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'',
    redirectTo:'gallery',
    pathMatch:'full'
  },
  { 
    path:'**',
    component:ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
