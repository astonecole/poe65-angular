import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Chuckquote } from './chuckquote.model';
import { interval, Observable } from 'rxjs';

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

    const int = interval(1000);

    const myStream = Observable.create((observer) => {
        observer.next('Hello');
    });
  
    myStream.subscribe(msg => console.log(msg));
    myStream.subscribe(msg => console.log(msg));

    int.subscribe(value => console.log(value));
    int.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
    this.http.get<Chuckquote>('https://api.chucknorris.io/jokes/random')
      .subscribe(
        (data: Chuckquote) => { this.quote = data; console.log(data) },
        err => console.log(err)
      );
  }

}
