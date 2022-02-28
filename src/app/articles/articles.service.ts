import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ArticlesService {
  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<{id: string; name: string; price: number; img: string}[]> {
    return this.httpClient.get<{id: string; name: string; price: number; img: string}[]>(`${environment.apirUrl}/articles`);
  }
}
