import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  // this.cartService.getItems() returns list, that is why items is list = []

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.cartService.clearCart();
    this.items = this.cartService.getItems()
    console.warn('Your order has been submitted, mu naebali vas', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
