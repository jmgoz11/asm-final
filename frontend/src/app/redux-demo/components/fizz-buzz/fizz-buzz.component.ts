import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFizzBuzzMessage } from '../../state';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css'],
})
export class FizzBuzzComponent implements OnInit {
  msg$!: Observable<string>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.msg$ = this.store.select(selectFizzBuzzMessage);
  }
}
