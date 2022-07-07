import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CourseListItemModel } from '../models';

export const FEATURE_NAME = 'Admin Feature';

import * as fromCourses from './reducers/courses.reducer';
export interface AdminState {
  courses: fromCourses.CoursesState;
}

export const reducers: ActionReducerMap<AdminState> = {
  courses: fromCourses.reducer,
};

// Create a Feature Selector
const selectFeature = createFeatureSelector<AdminState>(FEATURE_NAME);

// Create a selector for each "branch" of the feature.

const selectCoursesBranch = createSelector(selectFeature, (f) => f.courses);
// Create any Helpers

// const selectArrayOfCourseEntites = fromCourses.adapter.getSelectors(selectCoursesBranch).selectAll;
const {
  selectAll: selectArrayOfCourseEntities,
  selectTotal: selectTotalNumberOfCourses,
} = fromCourses.adapter.getSelectors(selectCoursesBranch);

// Create what your Component Needs:

// TODO: Create a selector that gives us a CourseListItemModel[]

export const selectCourseListItemModel = createSelector(
  selectArrayOfCourseEntities,
  (courses) => courses as CourseListItemModel[]
);
