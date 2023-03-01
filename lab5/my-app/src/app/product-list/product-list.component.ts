import { Component } from '@angular/core';

// import { products } from '../products';
import {Product, productsList} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = productsList;

  // share() {
  //   window.alert('The product has been shared!');
  //
  // }
  share(p: Product) {
    const url = encodeURI(p.prodLink);
    const telegram = `https://t.me/share/url?url=${url}`;
    const whatsapp = `https://api.whatsapp.com/send?text=${url}`;
    window.open(telegram);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/