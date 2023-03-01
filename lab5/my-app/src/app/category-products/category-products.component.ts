import {Component, Input, OnInit} from '@angular/core';
import {Product, productsList} from "../products";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../categories";

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{
  products: Product[] | undefined;

  constructor(private route: ActivatedRoute,) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const catIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = productsList.filter(p => p.category.id == catIdFromRoute)

  }
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