import { Component,OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course-outline',
  templateUrl: './course-outline.component.html',
  styleUrls: ['./course-outline.component.css']
})
export class CourseOutlineComponent implements OnInit {
constructor(
private activatedRoute: ActivatedRoute,
private heroservice:HeroService

){}

courseId:any;
course:any;
courses= this.heroservice.courses


darkModeEnabled = false;


myfun(event: any): void {
  this.darkModeEnabled = event.checked;
}

ngOnInit(): void {
  
   this.courseId = this. activatedRoute. snapshot. paramMap.get('id') ;
    console. log (typeof(this.courseId));
    this.course = this.courses.find(c => c.id == this. courseId);
}
}
