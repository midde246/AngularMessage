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
        email: new FormControl(),
        password: new FormControl()
    })

    dataSet = {}
    resData:any

    formData(){
        //this.dataSet = JSON.stringify(this.userSigninForm.value)
        //console.log(this.dataSet);
        this._signupService.sendDataToBackendSignin(this.userSigninForm.value).subscribe(
            respodata =>  console.log(respodata) 
        )
        //console.log(this.resData)
    }

    /* FormDataTest(){
        console.log(this.userSigninForm.value);
    } */

    checkSession(){
        this._signupService.checkSession().subscribe(
            respodata =>  console.log(respodata)  
        )
    }
} 