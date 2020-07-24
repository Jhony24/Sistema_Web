import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class JarwisService {
  private baseUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) {}

  registro(data) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
