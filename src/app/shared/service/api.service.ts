import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get<any>(environment.apiUrl + '/category')
  }

  getAllJobs(id:any=''){
    return this.http.post<any>(environment.apiUrl + `/job`,id)
  }

}
