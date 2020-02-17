import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  tasks: string[] = [];

  addToList(task: string) {
    this.tasks.push(task);
  }
}
