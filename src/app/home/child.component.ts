import { Component, Input } from '@angular/core';
@Component({
  selector: 'child-home',
  templateUrl: './child.component.html',
  styleUrls:['./home.component.css']
        
}) 
export class ChildComponent{
    item: String
    dataSet ={}
}