import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;

  getCategory(id?: any) {
    return this.http.post<any>(`${this.apiUrl}/category`, id);
  }

  getAllJobs(id?: any) {
    const body = {
      id, status: true
    }
    return this.http.post<any>(`${this.apiUrl}/job`, body);
  }
}
