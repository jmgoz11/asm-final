import { createSelector } from "@ngrx/store";
import { CourseListItemModel } from "../models";



// Select functions are "Queries" - here is a function that will give my component the data it needs to display the list.

export const selectCourseListModel = createSelector(
  () => {
    return [
      {
        id: '1',
        title: 'Angular State Management',
        description: 'Manage all the state!',
        numberOfDays: 3,
        hasOfferings: true
      },
      {
        id: '3',
        title: 'Advanced Angular',
        description: 'Learn More Advanced Stuff',
        numberOfDays: 4,
        hasOfferings: true
      },
      {
        id: '1',
        title: 'Event Driven Services',
        description: 'Kafkaesque Services FTW',
        numberOfDays: 3,
        hasOfferings: false
      }
    ] as CourseListItemModel[]
  }
)
