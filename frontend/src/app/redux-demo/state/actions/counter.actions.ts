import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';

export const counterEventActions = createActionGroup({
  source: 'Counter Component Events',
  events: {
    increment: emptyProps(),
    decrement: emptyProps(),
    reset: emptyProps(),
    countBySet: props<{ by: number }>(),
  },
});

export const counterCommandActions = createActionGroup({
  source: 'Counter Component Commands',
  events: {
    saveCounterData: emptyProps(),
    loadCounterData: emptyProps(),
  },
});

export const counterDocumentActions = createActionGroup({
  source: 'Counter Document Actions',
  events: {
    counter: props<{ payload: CounterState }>(),
  },
});
