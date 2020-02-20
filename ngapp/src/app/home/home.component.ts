import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article.model';
import { FlashMessengerService } from '../flash-messenger.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articleService: ArticlesService,
    private messageService: FlashMessengerService
  ) { }

  ngOnInit(): void {
    this.articleService.getArticles()
      .subscribe(
        (data: Article[]) => this.articles = data
      );
  }

  onRemove(article: Article): void {
    this.articleService.delete(article)
      .subscribe(
        () => {
          const pos = this.articles.findIndex(a => a.id === article.id);
          this.articles.splice(pos, 1);
          this.messageService.notify(`L'article "${article.title}" a été supprimé avec succès.`, 'success');
        }
      );
  }

}
