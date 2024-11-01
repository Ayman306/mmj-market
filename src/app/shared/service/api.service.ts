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

  getAllJobs(data?: any) {
    const body = {
      status: true
    }
    data = { ...body, ...data }
    return this.http.post<any>(`${this.apiUrl}/job`, data);
  }

  postJob(job: any) {
    return this.http.post<any>(`${this.apiUrl}/job/add`, job);
  }
}
