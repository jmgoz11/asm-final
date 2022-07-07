import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { selectCounterDataForStorage } from '..';

import {
  counterCommandActions,
  counterDocumentActions,
} from '../actions/counter.actions';
import { CounterState } from '../reducers/counter.reducer';
@Injectable()
export class CounterDataEffects {
  loadCountData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(counterCommandActions.loadcounterdata),
      map(() => {
        const data = localStorage.getItem('counter-data');
        if (data === null) {
          return counterDocumentActions.counter({
            payload: { current: 0, by: 1 },
          });
        } else {
          const payload = JSON.parse(data) as CounterState;
          return counterDocumentActions.counter({ payload });
        }
      })
    );
  });
  saveCountData$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(counterCommandActions.savecounterdata),
        concatLatestFrom(() => this.store.select(selectCounterDataForStorage)),
        tap(([_, result]) => {
          const json = JSON.stringify(result);
          localStorage.setItem('counter-data', json);
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store) {}
}
