import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  share(src: string | URL | undefined) {
    // window.alert('The product has been shared!');
    window.open("https://api.whatsapp.com/send?phone=${+77057891314}&text=" + src,  'menubar=off,toolbar=off')
  }

  Buy(src: string | URL | undefined) {
    window.open(src);
  }
}