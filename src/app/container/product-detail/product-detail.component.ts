import { Component } from '@angular/core';
import { Product } from '../../Models/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
product:Product;
}
