import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './flash-messenger/message.model';

@Injectable({
  providedIn: 'root'
})
export class FlashMessengerService {
  messages$: Subject<Message> = new Subject<Message>();

  constructor() {
    this.messages$.next(new Message('test', 'success'));
  }

  notify(text: string, type?: string) {
    this.messages$.next(new Message(text, type));
  }

  reset() {
    this.messages$.next();
  }
}
