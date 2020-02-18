import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  button: HTMLElement;

  constructor(elem: ElementRef) {
    this.button = elem.nativeElement; // === document.querySelector('button');
    this.resetStyles();
  }

  resetStyles():void {
    this.button.style.color = 'white';
    this.button.style.backgroundColor = 'royalblue';
    this.button.style.borderRadius = '2px';
    this.button.style.border = 'none';
    this.button.style.padding = '5px 10px';
    this.button.style.textDecoration = 'none';
    this.button.style.transition = 'background-color 0.5s ease-in-out';
  }

  @HostListener('mouseover') onHover(event: Event): void {
    this.button.style.backgroundColor = 'orangered';
  }

  @HostListener('mouseout') onMouseOut(event: Event): void {
    this.resetStyles();
  }

  @HostListener('click') onClick(event: Event): void {
    alert('Aieeeee!!!');
  }
}
