import { Component, OnInit} from '@angular/core';
import { HeroService } from '../service/hero.service'; 
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
 
  constructor(
    private heroservic:HeroService

  ){}

courses= this.heroservic.courses



ngOnInit(): void {
  
}

}
