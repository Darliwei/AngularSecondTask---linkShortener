import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UrlResponse } from '../Models/UrlResponse';

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  constructor(private http: HttpClient) {}

  getShortUrl(url: string): Observable<UrlResponse> {
    return this.http.get<UrlResponse>(
      `${environment.baseUrl}/shorten?url=${url}`
    );
  }
}
