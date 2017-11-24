import { Component } from '@angular/core';
import {StudentsService } from '../students.service';
 

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['/employee.component.css']
})

export class EmployeeComponent{
   dataArray:any = []
   dataSet ={} 
   constructor (private employeeData: StudentsService){}
   formSubmit()
   {
       //console.log(this.dataSet);
       //this.dataArray.push(this.dataSet);
       //console.log(this.dataArray);
       this.employeeData.saveData(this.dataSet).subscribe()
       
   }
   //console.log(dataArray);
} 