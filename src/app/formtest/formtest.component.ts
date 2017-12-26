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
 sessionData:any
 dataSet = {}
      jsonDataSets = {furniture: { 
                          "bed": {
                            "4": "I am First in bed",
                            "6": "I am Second in bed",
                            "7": "I am Third in bed"
                          },
                        "Chair": {
                          "5": "I am First in Chair"
                        }
                      }
                    }   

                      objs = {
                        "propertyA":{
                          "description":"this is the propertyA",
                          "default":"sth"
                        },
                        "propertyB":{
                          "description":"this is the propertyB",
                          "default":"sth"
                        }
                      };
                                        

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
   
   checkSession(){   
    this._service.checkSession().subscribe(
      respodata => {
         console.log(respodata);    
      })
   }
} 