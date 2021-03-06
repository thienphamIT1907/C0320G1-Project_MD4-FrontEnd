import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionRecordService {

  private API = 'http://localhost:8080/api/v1/auctionRecords';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllAuctionRecord(): Observable<any> {
    return this.httpClient.get(this.API);
  }

  getAuctionRecordById(auctionRecordId: number): Observable<any> {
    return this.httpClient.get(this.API + '/' + auctionRecordId);
  }
}
