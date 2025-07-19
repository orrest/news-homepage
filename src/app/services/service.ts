import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private http = inject(HttpClient);

  getData() {
    return this.http.get<Article>('./assets/data/data.json');
  }
}
