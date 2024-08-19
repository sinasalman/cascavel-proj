import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CollabrateComponent } from './collabrate/collabrate.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'about', component: AboutUsComponent
  },
  {
    path:'collabrate',component:CollabrateComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'team',component:TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
