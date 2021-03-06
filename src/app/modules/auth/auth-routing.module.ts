import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./login/login.component";
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { RegisterComponent } from "./register/register.component";
import { BeforeLoginService } from "./services/before-login.service";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: LoginComponent,
        //canActivate:[BeforeLoginService]
      },

      {
        path: "register",
        component: RegisterComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
