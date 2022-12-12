import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  message: string = '';

  editProductForm: FormGroup = this.formBuilder.group({
    name: '',
    price: 0,
    description: '',
    ProductCode: '',
  })


  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  getUserRole(): boolean {
    if (this.authService.isAdmin()) {
      return true
    }
    else return false;
  }
  showAlert(message: string): void {
    this.message = message
    setTimeout(() => this.message = '', 3000);
  }

  // getProductDetail(): void {
  //   const id = this.route.snapshot.params['id'];

  //   this.productService
  //     .getProductById({
  //       _id: id,
  //       name: '',
  //       price: 0,
  //       description: '',
  //       image: '',
  //       seller: '',
  //       ProductCode: '',
  //     }).subscribe({
  //       next: (product) => {
  //         this.editProductForm = this.formBuilder.group({
  //           name: product.name,
  //           price: product.price,
  //           description: product.description,
  //           ProductCode: product.ProductCode
  //         })
  //       }

  //     })
  // }




}
