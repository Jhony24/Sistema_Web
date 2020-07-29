import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, Routes } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AfterLoginService } from "../../auth/services/after-login.service";
import { AuthService } from "../../auth/services/auth.service";
import { TokenService } from "../../auth/services/token.service";
import { HeaderComponent } from "../../layout/header/header.component";
import { Users } from '../models/Users';

@Injectable({
  providedIn: "root",
})
export class AuthInterceptorService implements HttpInterceptor {

  user: Users = {
    cedula:null,
    nombre_completo:null,
    email:null,
    telefono:null,
    genero:null,
    ciclo:null,
    idcarrera:null,
    estadousuario:1
    };
  constructor(
    private ruta: Router,
    private toke: TokenService,
    private auth: AuthService,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = this.toke.get();

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.toke.get(),
        },
      });
    }


    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.toke.remove();
          this.auth.changeAuthStatus(false);
          this.ruta.navigateByUrl("/login");
        }
        

        return throwError(err);
      })
    );
  }
}
