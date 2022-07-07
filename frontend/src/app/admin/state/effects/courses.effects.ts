import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { courseCommands, courseEvents } from '../actions/courses.actions';

@Injectable()
export class CourseEffects {
  // This class just turns each event into one or more commmands.

  onCourseCreatedSaveTheCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseEvents.created),
      map(({ payload }) => courseCommands.create({ payload }))
    );
  });
  constructor(private actions$: Actions) {}
}
