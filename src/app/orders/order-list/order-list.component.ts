import { Component, OnInit } from '@angular/core';
import {OrderService  } from '../../core/services/order.service'
import { IOrder } from '../iorder'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  iorders: IOrder[];
  private _jsonURL = 'assets/orders.json';
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
     this._orderService.getOrders().subscribe(data => {
      this.iorders = data;
      console.log(this.iorders);
    });
  }

}
