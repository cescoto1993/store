import { IndexPage } from './index.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'index',
     component: IndexPage,
     children: [
         {
             path:'',
             loadChildren:() => import('../pages/welcome/welcome.module').then(
             m => m.WelcomePageModule)
         },
         {
            path:'login',
            loadChildren:() => import('../pages/login/login.module').then(
            m => m.LoginPageModule)
        },
        {
            path:'signup',
            loadChildren:() => import('../pages/signup/signup.module').then(
            m => m.SignupPageModule)
        },

     ]
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class IndexRouter {} 