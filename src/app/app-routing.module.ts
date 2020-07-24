import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UserProfileComponent } from "./github/user-profile/user-profile.component";
import { UserProfileResolver } from './github/resolvers/user-profile.resolver';


const routes: Routes = [
  { 
    path:"", 
    component: HomeComponent,
    children:[
      { path:"user/:username", component: UserProfileComponent, resolve: {userProfile:UserProfileResolver}}
    ]
  },
  { path:"**", redirectTo:"" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
