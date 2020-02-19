import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { FlashMessengerService } from '../flash-messenger.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-flash-messenger',
  templateUrl: './flash-messenger.component.html',
  styleUrls: ['./flash-messenger.component.scss']
})
export class FlashMessengerComponent implements OnInit {
  messages: Message[] = [];
  messageService: FlashMessengerService;

  constructor(messageService: FlashMessengerService) {
    this.messageService = messageService;
  }

  ngOnInit(): void {
    this.messageService.notify('Message depuis notify');

    this.messageService.messages$
      .pipe(tap(value => console.log(value)))
      .subscribe(
        (message: Message) => this.messages.push(message),
        err => console.log(err)
      );
  }

  onClose(pos: number): void {
    this.messages.splice(pos, 1);
  }
}
