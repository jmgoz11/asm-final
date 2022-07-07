import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CourseCreateRequestModel } from '../../models';
import { CourseEntity } from '../reducers/courses.reducer';

export const courseEvents = createActionGroup({
  source: 'Courses Events',
  events: {
    created: props<{ payload: CourseCreateRequestModel }>(),
  },
});

export const courseCommands = createActionGroup({
  source: 'Courses Commands',
  events: {
    load: emptyProps(),
    create: props<{ payload: CourseCreateRequestModel }>(),
  },
});

export const courseDocuments = createActionGroup({
  source: 'Course Documents',
  events: {
    courses: props<{ payload: CourseEntity[] }>(),
    course: props<{ payload: CourseEntity }>(),
  },
});
