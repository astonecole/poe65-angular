import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  colorValue: number = 0;

  @Input() label: string = '';
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Output() onChange = new EventEmitter<number>();

  onSlide() {
    this.onChange.emit(this.colorValue);
  }
}
