import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  selectedOrder: Order={
    order_id: "",
    user: "",
    products: [],
    shipping_address: "",
    cost: 0,
    status: ""
  }
;
  orders?: Order[];
  readonly baseURL='http://localhost:3000/order';
  constructor(private http: HttpClient) { }

  
  getOrderList() {
    return this.http.get(this.baseURL+'/getAllOrders');
  }
  putOrder(ord: Order) {
    return this.http.put(this.baseURL + `/${ord.order_id}`, ord);
  }
  deleteOrder(ord: Order) {
    return this.http.delete(this.baseURL + `/deleteOrder`, {
        body: ord
    });
}
  

}
