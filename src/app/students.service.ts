import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class StudentsService{
    
    // Url for backend API
    private _getUrl = 'http://127.0.0.1:8080/midde'
    private _postUrl = 'http://127.0.0.1:8080/employee'

    constructor(private _http: Http) {}
   
    fetchData(){
      return this._http.get(this._getUrl).map((response: Response) => response.json());
    }

    saveData(dataArray:any = []){
        console.log(dataArray);
        return this._http.post(this._postUrl,dataArray).map((response: Response) => response.json());
    }
}