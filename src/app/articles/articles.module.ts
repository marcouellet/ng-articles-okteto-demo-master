import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticlesSliderComponent } from './articles-slider/articles-slider.component';

@NgModule({
  declarations: [
    ArticlesSliderComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [ArticlesSliderComponent, ArticleCardComponent]
})
export class ArticlesModule { }
