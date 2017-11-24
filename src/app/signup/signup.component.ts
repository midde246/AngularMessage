import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../allservices/signup.service';


@Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.css']
})

export class SignupComponent{
    constructor(private _signupService:SignupService, private router:Router){}
    dataSet ={}
    resStatus:any

    formData(){
        //console.log(this.dataSet);
        this._signupService.sendDataToBackendSignup(this.dataSet).subscribe(
            respodata =>  {
                this.resStatus =  respodata.status 
                //console.log(this.resStatus)
                if(this.resStatus == 200){
                   alert("You have been sigened up successfully !!");
                   this.router.navigateByUrl('./home')
                }
            }
        );        
    }   
} 