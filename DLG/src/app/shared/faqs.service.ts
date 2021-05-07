import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faqs } from '../model/faqs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  constructor(private http: HttpClient) { }
  Url = 'assets/faqs.json';
  getFaqs(): Observable<Faqs[]>{
    return this.http.get<Faqs[]>(this.Url);
  }
}
