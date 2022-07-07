import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.css'],
})
export class LinkButtonComponent implements OnInit {
  @Input() btnStyle: 'primary' | 'danger' | 'success' = 'primary';
  @Input() btnSize: 'sm' | 'md' | 'lg' = 'md';
  @Output() btnClicked = new EventEmitter<TimeAndMessage>();
  constructor() {}

  ngOnInit(): void {}

  tellPapa() {
    this.btnStyle = 'danger';
    this.btnClicked.emit({
      time: new Date().toISOString(),
      message: 'They clicked the button',
    });
  }
}

export interface TimeAndMessage {
  time: string;
  message: string;
}
