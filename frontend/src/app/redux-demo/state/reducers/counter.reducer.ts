import { createReducer, on } from '@ngrx/store';
import {
  counterDocumentActions,
  counterEventActions,
} from '../actions/counter.actions';
export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1,
};

export const reducer = createReducer(
  initialState,
  on(counterDocumentActions.counter, (_, a) => a.payload),
  on(counterEventActions.countbyset, (s, a) => ({ ...s, by: a.by })),
  on(counterEventActions.reset, (s) => ({ ...s, current: 0 })),
  on(counterEventActions.increment, (currentState: CounterState) => ({
    ...currentState,
    current: currentState.current + currentState.by,
  })),
  on(counterEventActions.decrement, (s) => ({
    ...s,
    current: s.current - s.by,
  }))
);
