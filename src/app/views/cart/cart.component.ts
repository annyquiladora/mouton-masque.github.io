import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  BASE_URL: string = environment.API_URL

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

}
