import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Order } from 'src/app/models/order';
import { BookstoreService } from 'src/app/services/bookstore.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  columns = ['id', 'author', 'title', 'price'];

  constructor(private bs: BookstoreService) { }

  ngOnInit(): void {
    this.bs.getOrders()
      .subscribe(res => {
        this.orders = res;
      });
  }

}
