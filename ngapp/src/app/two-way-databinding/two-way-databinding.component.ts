import { Component } from '@angular/core';
import { FlashMessengerService } from '../flash-messenger.service';

@Component({
  selector: 'app-two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.scss']
})
export class TwoWayDatabindingComponent {
  country: string = 'France';

  constructor(private messageService: FlashMessengerService) { }

  onKeyup(event: any): void {
    const value = event.target.value;

    if (value === 'France') {
      this.messageService.notify(`Pays: ${value}`);
    }

    this.country = value;
  }
}
