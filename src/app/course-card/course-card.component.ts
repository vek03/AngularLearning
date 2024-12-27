import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.css',
    standalone: false,
})
export class CourseCardComponent {

  @Input({
    required: true,
  })
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseClicked() {
    console.log('Course card clicked!');

    this.courseSelected.emit(this.course);
  }
}
