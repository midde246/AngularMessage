//Modules Dependencies....
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
//import { RouterModule }  from '@angular/router';
import { routing }  from './app.routing';
 
//Components Dependencies....
import { AppComponent }  from './app.component';
import { StudentsComponent }  from './students/students.component';
import { EmployeeComponent }  from './employee/employee.component';
import { AddingComponent }  from './adding/adding.component';
import { SignupComponent }  from './signup/signup.component';
import { SigninComponent }  from './signin/signin.component';
import { HomeComponent }  from './home/home.component';
import { FormtestComponent }  from './formtest/formtest.component';

//Services Dependencies..
import { StudentsService } from './students.service';
import { SignupService } from './allservices/signup.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing
              /*   RouterModule.forRoot(routes)  */
                ],

  declarations: [ AppComponent,
                  StudentsComponent,
                  EmployeeComponent,
                  AddingComponent,
                  HomeComponent,
                  SigninComponent,
                  SignupComponent,
                  FormtestComponent
                   ],
  providers:    [ StudentsService, SignupService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
