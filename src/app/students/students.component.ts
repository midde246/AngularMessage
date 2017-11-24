import { Component } from '@angular/core';
import {StudentsService } from '../students.service';
@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
})

export class StudentsComponent{
   students:any = [] 
   title = "Calling from student components....."
 constructor(private studentsData: StudentsService){}
 
 ngOnInit(){
   this.studentsData.fetchData().subscribe(
       resdata => this.students = resdata
   )

 }
} 