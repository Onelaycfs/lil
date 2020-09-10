import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CriarContaComponent} from './criar-conta/criar-conta.component';

const routes: Routes = [
                        {path:'', component:LoginComponent},
                        {path:'home',component:HomeComponent},
                        {path:'criar/conta',component:CriarContaComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
