import { Component, OnInit } from '@angular/core';
import { FlashMessengerService } from '../flash-messenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private messageService: FlashMessengerService) { }

  ngOnInit(): void {
    this.messageService.notify('Message depuis notify');
  }

}
