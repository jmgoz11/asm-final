import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseListItemModel } from '../../models';
import { selectCourseListItemModel } from '../../state';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  model$!: Observable<CourseListItemModel[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.model$ = this.store.select(selectCourseListItemModel);
  }
}
