import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureEvents } from './state/actions/feature.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(store: Store) {
    store.dispatch(FeatureEvents.FeatureEntered());
  }

  ngOnInit(): void {}
}
