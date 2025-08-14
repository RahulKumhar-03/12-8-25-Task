import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiUrl = 'https://dummyjson.com/users'

  constructor(private http: HttpClient) { }
  
  getAllUserDetails():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  createNewUser(userData: any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/add`, userData);
  }
}
