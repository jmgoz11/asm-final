import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CourseCreateRequestModel, FormModel } from '../../models';
import { courseEvents } from '../../state/actions/courses.actions';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css'],
})
export class CourseEntryComponent implements OnInit {
  form!: FormGroup<FormModel<CourseCreateRequestModel>>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.form = new FormGroup<FormModel<CourseCreateRequestModel>>({
      title: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      numberOfDays: new FormControl<number>(0, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.min(1),
          Validators.max(14),
        ],
      }),
    });
  }

  get title() {
    return this.form.controls.title;
  }

  get description() {
    return this.form.controls.description;
  }

  get numberOfDays() {
    return this.form.controls.numberOfDays;
  }
  createCourse(foci: HTMLInputElement) {
    // dispatch!

    if (this.form.valid) {
      const payload = this.form.value as CourseCreateRequestModel;
      this.store.dispatch(courseEvents.created({ payload }));
      this.form.reset();
      foci.focus();
    } else {
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field);
        control!.markAsTouched({ onlySelf: true });
      });

      //this.form.markAllAsTouched();

      // Not sure! Leave it for an issue.
    }
  }
}
