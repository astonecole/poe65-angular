import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.scss']
})
export class TwoWayDatabindingComponent {
  country: string = 'France';

  onKeyup(event: any): void {
    this.country = event.target.value;
  }
}
