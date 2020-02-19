import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Message } from './message.model';
import { FlashMessengerService } from '../flash-messenger.service';

@Component({
  selector: 'app-flash-messenger',
  templateUrl: './flash-messenger.component.html',
  styleUrls: ['./flash-messenger.component.scss']
})
export class FlashMessengerComponent implements OnInit, AfterViewInit {
  messages: Message[] = [];
  messageService: FlashMessengerService;

  constructor(messageService: FlashMessengerService) {
    this.messageService = messageService;
  }

  ngOnInit(): void { }
  
  ngAfterViewInit(): void {
    this.messageService.messages$
    .subscribe(
      (message: Message) => this.messages.push(message),
      err => console.log(err)
      );
      this.messageService.notify('hello', 'success');
  }

  onClose(pos: number): void {
    this.messages.splice(pos, 1);
  }
}
