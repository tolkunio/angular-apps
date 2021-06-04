import { 
  Component,
  EventEmitter       
} from '@angular/core';
import { Product } from 'src/app/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-management-app';
  products: Product[];

  constructor(){
    this.products =[
      new Product(
      'NICECHAT',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg',
      ['Men','Accessories','Hats'],
      29.99),
      new Product(
      'MYSHOES',
      'Black Running shoes',
      '/assets/images/products/black-shoes.jpg',
      ['Men','Shoes','Running shoes'],
      109.99),
      new Product(
      'METOJACKET',
      'Blue Jacket',
      '/assets/images/products/blue-jacket.jpg',
      ['Women','Apparel','Jackets & Vests'],
      238.99)
    ]
  };
  productWasSelected(product:Product):void{
    console.log('Product clickes',product);
  }
}
