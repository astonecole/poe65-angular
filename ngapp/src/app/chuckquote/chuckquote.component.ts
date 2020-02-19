import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Chuckquote } from './chuckquote.model';
import { interval, Observable, Observer, timer } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chuckquote',
  templateUrl: './chuckquote.component.html',
  styleUrls: ['./chuckquote.component.scss']
})
export class ChuckquoteComponent implements OnInit {
  http: HttpClient;
  quote: Chuckquote = new Chuckquote();

  constructor(http: HttpClient) {
    this.http = http;

    const int = interval(1000)
      .pipe(
        tap(val => console.log(val)),
        map(val => val * 5)
      );

    // int.subscribe(value => console.log(value));

    const myStream: Observable<string> = Observable.create((observer: Observer<string>) => {
      observer.next('Hello');
      observer.next('Hello Again');
      observer.complete();
    });

    // Observer 1 souscrit à mon flux de données Observable myStream.
    myStream.subscribe(
      msg => console.log("Observer 1", msg),
      err => console.log(err),
      () => console.log('Completed')
    );

    myStream.subscribe(
      msg => console.log("Observer 2", msg),
      err => console.log(err),
      () => console.log('Completed')
    );
  }

  ngOnInit(): void {
    timer(0, 1000 * 10).subscribe(
      (value: number) => {
        this.getQuote();
      }
    );
  }

  getQuote() {
    this.http.get<Chuckquote>('https://api.chucknorris.io/jokes/random')
      .subscribe(
        (data: Chuckquote) => { this.quote = data; console.log(data) },
        err => console.log(err)
      );
  }
}
