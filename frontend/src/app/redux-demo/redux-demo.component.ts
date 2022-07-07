import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCounterCurrentValue,
  selectDecrementShouldBeDisabled,
} from './state';
import {
  counterCommandActions,
  counterEventActions,
} from './state/actions/counter.actions';
@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.css'],
})
export class ReduxDemoComponent implements OnInit {
  current$!: Observable<number>;
  disableDecrement$!: Observable<boolean>;

  constructor(private store: Store) {
    store.dispatch(counterCommandActions.loadcounterdata());
  }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCounterCurrentValue);
    this.disableDecrement$ = this.store.select(selectDecrementShouldBeDisabled);
  }

  increment() {
    this.store.dispatch(counterEventActions.increment());
  }

  decrement() {
    this.store.dispatch(counterEventActions.decrement());
  }

  reset() {
    this.store.dispatch(counterEventActions.reset());
  }
}
