import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.API_URL + 'auth';
  private userUrl: string = this.baseUrl + '/user/';

  constructor(private http: HttpClient) { }

  
}
