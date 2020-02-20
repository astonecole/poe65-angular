import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from 'src/app/models/article.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { FlashMessengerService } from 'src/app/flash-messenger.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  article: Article = new Article();

  constructor(
    private articleService: ArticlesService,
    private router: Router,
    private messageService: FlashMessengerService
  ) { }

  ngOnInit(): void {
    this.article.title = '';
    this.article.content = '';
  }

  onSave() {
    this.articleService.save(this.article)
      .subscribe(
        (data: Article) => {
          this.messageService.notify(`L'article '${data.title}' a bien été ajouté.`, 'success');
          this.router.navigate(['/']);
        }
      );
  }

}
