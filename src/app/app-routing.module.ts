import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizeComponent } from './visualize/visualize.component';
import { LoginComponent } from './login/login.component';
import { QueryInputComponent } from './query-input/query-input.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "visualize/:wallet",
    component: VisualizeComponent,
    pathMatch: "full"
  },
  {
    path: "query-input",
    component: QueryInputComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
