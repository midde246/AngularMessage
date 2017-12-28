import { Injectable } from '@angular/core';
import{ Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()

export class SignupService{
    constructor(private _http:Http){}
    _urlSignup = 'http://127.0.0.1:8080/api/signup' // For signup API
    _urlSignin = 'http://127.0.0.1:8080/api/signin' // For signin API
    _urlMessage = 'https://midde.herokuapp.com/api/message' //For message API
    _urlSendMessage = 'https://midde.herokuapp.com/api/insertMessage' //For message API
    _urlTestLogin = 'http://127.0.0.1:8080/api/testLogin' //For Test Login API
    _urlCheckSession = 'http://127.0.0.1:8080/api/checkSession' //For Test Login API
    sendDataToBackendSignup(dataSet:any){
         console.log(dataSet);
          return this._http.post(this._urlSignup, dataSet).map((response:Response) => response)
   }

   // Send data to backend signin for test....
   sendDataToBackendSignin(dataSet:any){
          //console.log(dataSet)
          return this._http.post(this._urlTestLogin, dataSet).map(
              (response:Response) => response
            )
   }

   //GEt the mesage fom backend
   getTheMessage(){
       return this._http.get(this._urlMessage).map(
           (response: Response) => response.json()
            
       )
   }

   //Send the message to backend
   sendMessage(dataSet:any){
     //console.log(dataSet);
     return this._http.post(this._urlSendMessage, dataSet).map((response:Response) => response)
   }

   // testLogin for session create..
   testLogin(dataSet:any){
    return this._http.post(this._urlTestLogin, dataSet).map(
        (response:Response) => {
            //response = response.json()
            console.log(response.json());
        }
    )}

  //For checking session
  checkSession(accessToken:string){
    let myHeader = new Headers({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoib…3Mjh9.Q5w2m911FWmuM-0wJKyQ8gSW4w9ul9csPGBvroWuk8A' });

    return this._http.get(this._urlCheckSession, { headers: myHeader }).map(
        (response: Response) => response.json()  
    )
  }
}  