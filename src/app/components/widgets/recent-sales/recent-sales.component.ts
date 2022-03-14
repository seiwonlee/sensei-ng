import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-recent-sales',
  templateUrl: './recent-sales.component.html',
  styleUrls: ['./recent-sales.component.scss']
})
export class RecentSalesComponent implements OnInit, OnChanges {
  @Input() duration:number=7;
  products: Product[];
  selectedRange: number;

  constructor(private productService: ProductsService) {
    this.productService.getProductsSmall().then(data => this.products = data);
   }

  ngOnInit(): void {
  }

  ngOnChanges(e:any){
  }
}
