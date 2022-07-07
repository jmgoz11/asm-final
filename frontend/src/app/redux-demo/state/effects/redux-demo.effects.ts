import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import {
  counterCommandActions,
  counterEventActions,
} from '../actions/counter.actions';

@Injectable()
export class ReduxDemoEffects {
  saveCounterDataWhen$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        counterEventActions.countbyset,
        counterEventActions.decrement,
        counterEventActions.increment,
        counterEventActions.reset
      ),
      map(() => counterCommandActions.savecounterdata())
    );
  });

  // logAllActions$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       tap((a) => console.log(`Got an action of type ${a.type}`))
  //     );
  //   },
  //   { dispatch: false }
  // );

  constructor(private actions$: Actions) {}
}
