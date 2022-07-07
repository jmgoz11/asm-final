import { Component, OnInit } from '@angular/core';
import { TimeAndMessage } from '../ui-lib/link-button/link-button.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  theyClickedTheButton(event: TimeAndMessage) {
    console.log(event);
  }
}
