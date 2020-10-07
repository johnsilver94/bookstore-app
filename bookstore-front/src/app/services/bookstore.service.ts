import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BOOKS_API_URL } from '../app-injection-tokens';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

  constructor(private http: HttpClient, @Inject(BOOKS_API_URL) private apiUrl: string,private authService: MsalService) { }

  private baseApiUrl = `${this.apiUrl}/`;

  getCatalog(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseApiUrl}books`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseApiUrl}orders`);
  }
}
