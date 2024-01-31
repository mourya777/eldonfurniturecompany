import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  get() {
    let headers = new HttpHeaders().set('x-api-key', '057676c6-c5ec-44f6-b0e1-cd6c56875467');

    const url = `${environment.apiUrl}products`;
    return this.httpClient.get(url, { headers: new HttpHeaders({ 'x-api-key': '057676c6-c5ec-44f6-b0e1-cd6c56875467' }) });
  }
}
