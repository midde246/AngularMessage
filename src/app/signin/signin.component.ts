import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { SignupService } from '../allservices/signup.service';

@Component({
   selector: 'app-signin',
   templateUrl: './signin.component.html',
   styleUrls: ['./signin.component.css']
})

export class SigninComponent{
    constructor(private _signupService:SignupService){

    }
    
    userSigninForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })
    
    accessdata  = {}

    formData(){
        //this.dataSet = JSON.stringify(this.userSigninForm.value)
        //console.log(this.userSigninForm.value);
        this._signupService.sendDataToBackendSignin(this.userSigninForm.value).subscribe(
            respodata =>  {               
                //this.accessdata =  respodata
                console.log(respodata.json())
                this.accessdata = respodata.json()
               }
        )
    }
 
    checkSession(){
        this._signupService.checkSession(this.accessdata.token).subscribe(
            respodata =>  console.log(respodata)  
        )
    }
} 