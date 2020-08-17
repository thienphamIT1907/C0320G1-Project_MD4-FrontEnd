import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/v1/admin/approvement';
  private approveUrl = 'http://localhost:8080/api/v1/admin/approvement/approve';
  private unApproveUrl = 'http://localhost:8080/api/v1/admin/approvement/unApprove';

  constructor(private http: HttpClient) {
  }

  // Thành Long
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Thành Long
  approvementProduct(id: number): Observable<any> {
    return this.http.get(`${this.approveUrl}/${id}`);
  }

  // Thành Long
  unApprovementProduct(product: Product): Observable<any> {
    return this.http.get(`${this.unApproveUrl}/${product}`);
  }


}
