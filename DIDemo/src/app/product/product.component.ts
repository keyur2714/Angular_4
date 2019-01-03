import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { LoggingService } from '../services/logging.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers : [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService,private loggingService:LoggingService) { }

  ngOnInit() {
    this.loggingService.logInfo("Product Component Inititlized...!");
    this.productService.getProductList();
  }

}
