import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
  
    AboutUsComponent,
    CategoriesComponent,
    NewsComponent,
    VideosComponent,
    ContactUsComponent,
    
    NavigationComponent,
    FooterComponent,
    
  
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
