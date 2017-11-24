import { Component } from '@angular/core';
import { SignupService } from '../allservices/signup.service';

@Component({
   selector: 'app-signin',
   templateUrl: './signin.component.html',
   styleUrls: ['./signin.component.css']
})

export class SigninComponent{
    constructor(private _signupService:SignupService){}
    dataSet = {}
    resData:any

    formData(){
        //console.log(this.dataSet);
        this._signupService.sendDataToBackendSignin(this.dataSet).subscribe(
            respodata => this.resData /* =   console.log(respodata) */
        )
        console.log(this.resData)
    }
} 