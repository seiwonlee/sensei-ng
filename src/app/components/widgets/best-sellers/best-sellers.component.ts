import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent implements OnInit, OnChanges {
  @Input() duration:number=7;
  products: Product[];
  selectedRange: number;

  constructor(private productService: ProductsService) {
    this.productService.getProductsWithOrdersSmall().then(data => {
      this.products = data;
      this.products = this.products.sort((n1,n2)=>{
        if (n1.quantity && n2.quantity && (n1.quantity > n2.quantity)) {
          return -1;
        }
        if (n1.quantity && n2.quantity && (n1.quantity < n2.quantity)) {
            return 1;
        }
        return 0;
      });
    });
   }

  ngOnInit(): void {
  }

  ngOnChanges(e:any){
    //reload data if the @Input changes from the parent
  }

}
