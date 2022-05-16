import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path:"aboutus",
    component:AboutUsComponent
  },
  {
    path:"categories",
    component:CategoriesComponent
  },
  {
    path:"news",
    component:NewsComponent
  },
  {
    path:"contactus",
    component:ContactUsComponent
  },
  {
    path:"videos",
    component:VideosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
