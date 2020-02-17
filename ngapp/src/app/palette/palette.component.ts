import { Component } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent {
  colors: number[] = [0, 0, 0]; // [r, g, b] in order

  onUpdate(value: any) {
    this.colors[value.index] = value.color;
  }

  toString(): string {
    return `rgb(${this.colors[0]}, ${this.colors[1]}, ${this.colors[2]})`;
  }
}
