import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseOutlineComponent } from './course-outline/course-outline.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
{
  path: "course",
  component:CourseComponent
},
{
  path: "course-outline",
  component:CourseOutlineComponent
},
{
  path: '',
  component:CourseComponent
},
{
  path: "course-outline/:id",
  component:CourseOutlineComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
