import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IOrder } from '../../order/iorder'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _orderUrl = 'assets/orders.json'
  constructor(private httpClient: HttpClient) { }

  public getOrders() {
    return this.httpClient.get<IOrder[]>(this._orderUrl);
  }
}
