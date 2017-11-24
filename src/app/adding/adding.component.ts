import { Component } from '@angular/core';
 
@Component({
    selector: 'app-adding',
    templateUrl: './adding.component.html',
    styleUrls: ['./adding.component.css']
})

export class AddingComponent{
   items =['Angular4', 'MongoDb', 'Express', 'NodeJS']
   newItem = ''
    pushItem(){
      if(this.newItem !=''){
        this.items.push(this.newItem);
        this.newItem =''
      }
    }
    removeItem(index:any){
       this.items.splice(index, 1);   
    }
} 