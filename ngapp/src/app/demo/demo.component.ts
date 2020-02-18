import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements AfterViewInit {
  title = 'Angular';
  tasks: string[] = [];

  @ViewChild('focusInput') focusInputRef: ElementRef;
  @ViewChild(HelloComponent) helloRef: HelloComponent;

  ngAfterViewInit(): void {
    // hooks
    // this.helloRef.name = 'AppComponent';
    // this.focusInputRef.nativeElement.value = 'test';
    this.focusInputRef.nativeElement.focus();
  }

  addToList(task: string) {
    this.tasks.push(task);
  }
}
