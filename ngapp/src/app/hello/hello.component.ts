import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {

  }

  onSave(event: Event) {
    console.log(event);
    alert(this.name);
  }

  getName(): string {
    return this.name;
  }

}
