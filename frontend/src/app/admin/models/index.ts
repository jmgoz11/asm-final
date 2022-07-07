import { FormControl } from '@angular/forms';
import { CourseEntity } from '../state/reducers/courses.reducer';

export type CourseListItemModel = Readonly<CourseEntity>;

export type CourseCreateRequestModel = Omit<CourseEntity, 'id'>;

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
export type FormModel<Type> = {
  [Property in keyof Type]?: FormControl<Type[Property]>;
};
