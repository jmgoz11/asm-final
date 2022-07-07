import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { courseCommands, courseDocuments } from '../actions/courses.actions';
import { map, mergeMap, switchMap } from 'rxjs';
import { CourseEntity } from '../reducers/courses.reducer';

import { environment } from 'src/environments/environment'; // classroom BS code.
@Injectable()
export class CoursesDataEffects {
  readonly baseUrl = environment.coursesUrl + 'courses';

  saveTheCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseCommands.create),
      mergeMap(({ payload }) =>
        this.client
          .post<CourseEntity>(this.baseUrl, payload)
          .pipe(map((payload) => courseDocuments.course({ payload })))
      )
    );
  });

  loadTheCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseCommands.load),
      switchMap(() =>
        // switchMap is "cancellable"
        this.client
          .get<{ data: CourseEntity[] }>(this.baseUrl)
          .pipe(map(({ data }) => courseDocuments.courses({ payload: data })))
      )
    );
  });
  // when we get the command to load the courses,
  // make an HTTP call, get the courses, and return
  // a courses document

  constructor(private actions$: Actions, private client: HttpClient) {}
}
