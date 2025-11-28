import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequest } from '../../model/real model/page-request.model';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  private baseUrl = 'https://luxoruniversityar.runasp.net/api/v1/about';

  private http = inject(HttpClient);

  getPaged(data: PageRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/getpaged`, data);
  }

  getById(id: string) {
    return this.http.get<any>(`${this.baseUrl}/get/${id}`);
  }

  get pages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getall`);
  }
}
