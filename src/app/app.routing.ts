//Set dependencies for routing.....
import { Routes, RouterModule }  from '@angular/router';

//Set dependencies for Components....
import { HomeComponent }  from './home/home.component';
import { SignupComponent }  from './signup/signup.component';
import { SigninComponent }  from './signin/signin.component';

 const routes:Routes = [
        {   path: '', component: HomeComponent },
        {   path: 'signup', component: SignupComponent },
        {   path: 'signin', component: SigninComponent }
 ]

 export const routing =  RouterModule.forRoot(routes);
 