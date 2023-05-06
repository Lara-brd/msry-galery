import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './gallery/home/home.component';

const routes: Routes = [
  {
    path:'gallery',
    component:HomeComponent,
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
