import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getArticles()
      .subscribe(
        (data: Article[]) => this.articles = data
      );
  }

}
