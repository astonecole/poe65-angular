import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
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
