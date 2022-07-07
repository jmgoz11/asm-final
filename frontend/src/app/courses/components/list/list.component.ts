import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseListItemModel } from '../../models';
import { selectCourseListModel } from '../../state/course-list.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  model$!: Observable<CourseListItemModel[]>;

  buttonSize = 'sm';
  constructor(private store: Store) {}

  ngOnInit(): void {
    // calls this right before putting the component on the screen.
    // this is where you do ANYTHING that will change what is going to display on the
    // the screeen
    this.model$ = this.store.select(selectCourseListModel);
  }
}
