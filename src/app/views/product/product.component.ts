import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { environment } from 'src/environments/environment';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  BASE_URL: string = environment.API_URL
  addedToCart: boolean = false;
  quantity: number = 1;
  addToCartForm = this.formBuilder.group({
    quantity: 1
  })

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {

  }
}
