import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequest } from '../model/page-request.model';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  private baseUrl = 'http://luxoruniversityapi.runasp.net/api/v2/about';

  constructor(private http: HttpClient) {}

  getPaged(data: PageRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/getpaged`, data);
  }
}
