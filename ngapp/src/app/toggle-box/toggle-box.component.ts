import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-box',
  templateUrl: './toggle-box.component.html',
  styleUrls: ['./toggle-box.component.scss']
})
export class ToggleBoxComponent implements OnInit {
  title: string = 'Untitiled';
  state: boolean = false;

  constructor() { }

  ngOnInit(): void { }

}
