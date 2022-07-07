import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeatureEvents } from '../actions/feature.actions';
import { courseCommands } from '../actions/courses.actions';
import { map } from 'rxjs';

@Injectable()
export class CoursesFeatureEffects {
  whenFeatureIsEnteredLoadTheCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FeatureEvents.FeatureEntered), // nothing. FEA
      map(() => courseCommands.load()) // coursesLoadAction
    );
  });

  constructor(private actions$: Actions) {}
}
