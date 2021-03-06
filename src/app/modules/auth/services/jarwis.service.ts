import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class JarwisService {
  private baseUrl = "https://proeditsclub.com/mendoza/backendPracticas/public/index.php/api";
  //private baseUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}

  registro(data) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  sendPasswordResetLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordReserLink`, data);
  }
  changePassword(data){
    return this.http.post(`${this.baseUrl}/resetPassword`, data);

  }
}
