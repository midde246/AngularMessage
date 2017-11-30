import { Component } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms'; 
import { SignupService } from '../allservices/signup.service'

@Component({
   selector: 'app-formtest',
   templateUrl: './formtest.component.html',
   styleUrls: ['./formtest.component.css']
})

export class FormtestComponent{
 messageDatas:any =[]
 dataSet = {}
  constructor(private _service : SignupService){}

    getMessage(){
        //console.log("Yes I am being called ..... ");
      this._service.getTheMessage().subscribe(
        respodata => {
                        this.messageDatas =  respodata
                        //console.log(this.messageDatas)              
        }  
      )
 }
    sendMessage(){
          this._service.sendMessage(this.dataSet).subscribe(
              respodata => {
                    
              }  
          )
    }

    testLogin(){
      this._service.testLogin(this.dataSet).subscribe(
          respodata => {
                
          }  
      )
   }
   
   fileUpload(){
     
   }


} 