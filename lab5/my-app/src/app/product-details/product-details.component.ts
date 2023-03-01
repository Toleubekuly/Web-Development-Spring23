import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, productsList } from '../products'; // import productList from products module
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
      private route: ActivatedRoute,
      private cartService: CartService
  ) { }

  deleteFromList(product: Product) {
    const index = productsList.findIndex(p => p.id === product.id); // use productsList instead of this.productLis
    productsList.splice(index, 1); // use productsList instead of this.productList

  }
  likeIt(product: Product) {
    if (product.putLike == false) {
      product.likes = product.likes + 1;
      product.putLike = true
    }
    else{
      product.likes = product.likes - 1;
      product.putLike = false;
    }




  }
  addToCart(product: Product) {

    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = productsList.find(
        (product) => product.id === productIdFromRoute
    );
  }
}
