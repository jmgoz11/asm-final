import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { OfferingsComponent } from './components/offerings/offerings.component';
import { UiLibModule } from '../ui-lib/ui-lib.module';

const routes:Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: ':course-id/offerings',
        component: OfferingsComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]

@NgModule({
  declarations: [
    CoursesComponent,
    RegisterComponent,
    ListComponent,
    OfferingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("courses feature", {}),
    UiLibModule
  ],
  exports: [
    RouterModule,

  ]
})
export class CoursesModule { }
