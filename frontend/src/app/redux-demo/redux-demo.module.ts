import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxDemoComponent } from './redux-demo.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
import { CountByComponent } from './components/count-by/count-by.component';
import { EffectsModule } from '@ngrx/effects';
import { ReduxDemoEffects } from './state/effects/redux-demo.effects';
import { CounterDataEffects } from './state/effects/counter-data.effects';
import { FizzBuzzComponent } from './components/fizz-buzz/fizz-buzz.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReduxDemoComponent,
  },
];

@NgModule({
  declarations: [ReduxDemoComponent, CountByComponent, FizzBuzzComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([ReduxDemoEffects, CounterDataEffects]),
  ],
  exports: [ReduxDemoComponent],
})
export class ReduxDemoModule {}
