import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

/**
 * selector: app-hello | [app-hello] | .app-hello
 */
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HelloComponent implements OnInit {
  name: string = '';
  @Output() valueEvent = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void { }

  onSave(event: Event) {
    const evt = event as KeyboardEvent;

    if (evt.keyCode === 13) {
      const input = event.target as HTMLInputElement;
      if (input.value) {
        this.valueEvent.emit(input.value);
        input.value = '';
      }
    }
  }
}
