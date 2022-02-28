import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-articles-slider',
  templateUrl: './articles-slider.component.html',
  styleUrls: ['./articles-slider.component.scss']
})
export class ArticlesSliderComponent implements OnInit {
  articles: {id: string; name: string; price: number; img: string}[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticles().pipe(first())
      .subscribe((articles: {id: string; name: string; price: number; img: string}[]) => this.articles = articles);
  }
}
