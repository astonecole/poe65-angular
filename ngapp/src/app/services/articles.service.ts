import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  find(id: number): Observable<Article> {
    return this.http.get<Article>('http://localhost:3000/articles/' + id);
  }

  delete(article: Article): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/articles/' + article.id);
  }

  save(article: Article): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/articles', article);
  }

  update(article: Article): Observable<void> {
    return this.http.put<void>('http://localhost:3000/articles', article);
  }

}
