import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckquoteComponent } from './chuckquote.component';

describe('ChuckquoteComponent', () => {
  let component: ChuckquoteComponent;
  let fixture: ComponentFixture<ChuckquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
