import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { map } from 'rxjs/operators';
import { CartDetail } from '../models/cart-detail';
import { CartDetailDTO } from '../models/dtos/cart-detail-dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly API = 'http://localhost:8080/api/v1/cart';
  private _totalCost: number;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  // Lấy thông tin giỏ hàng của một user
  getCart(userId: number): Observable<Cart> {
    return this.http.get<Cart>(this.API + `?userId=${userId}`, this.httpOptions);
  }

  // Cập nhật lại tổng giá tiền khi có sự thay đổi
  updateTotalCost(cartId: number): Observable<number> {
    return this.http.put<number>(this.API, { cartId }, this.httpOptions).pipe(
      map((res: number) => {
        this._totalCost = res;
        return res;
      })
    );
  }

  // Lưu một sản phẩm đấu giá thành công vào giỏ hàng
  saveToCart(cartDetailDTO: CartDetailDTO): Observable<CartDetail> {
    return this.http.post<CartDetail>(this.API + '/cart-detail', cartDetailDTO, this.httpOptions);
  }

  // Thay đổi số lượng của một sản phẩm
  updateItem(cartDetailId: number, quantity: number): Observable<CartDetail> {
    return this.http.put<CartDetail>(this.API + '/cart-detail', { cartDetailId, quantity }, this.httpOptions);
  }

  // Xóa sản phẩm khỏi giỏ hàng
  deleteItem(cartDetailId: number): Observable<CartDetail> {
    return this.http.delete<CartDetail>(this.API + `/cart-detail/${cartDetailId}`, this.httpOptions);
  }

  // getter
  get totalPrice() {
    return this._totalCost;
  }
}
