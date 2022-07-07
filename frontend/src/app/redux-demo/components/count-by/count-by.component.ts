import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounterCountingBy } from '../../state';
import { counterEventActions } from '../../state/actions/counter.actions';

@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css'],
})
export class CountByComponent implements OnInit {
  by$!: Observable<number>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.by$ = this.store.select(selectCounterCountingBy);
  }

  countBySet(by: number) {
    this.store.dispatch(counterEventActions.countbyset({ by }));
  }
}
