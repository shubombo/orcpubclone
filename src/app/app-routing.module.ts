import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestformComponent } from './testform/testform.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
