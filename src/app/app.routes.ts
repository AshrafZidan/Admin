import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
export const routes:Routes = [
  {path:'',component:AppComponent},
  {path:'/profile:id',component:ProfileComponent}
];
