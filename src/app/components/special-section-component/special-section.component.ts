import { Component, Output, EventEmitter} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Input } from '@angular/core';
import { ProductCard } from '../product-card-component/product-card.component';
import { Product } from '../product-card-component/models/product';


@Component({
  selector: 'special-section',
  imports: [RouterOutlet, ProductCard],
  templateUrl: './special-section.component.html',
  styleUrl: './special-section.component.css'
})
export class SpecialSection {
    @Input() name = '';

    products = [
      new Product(1, 'Lungo Coffee', 'This is our specialty Lungo Coffee', '../../../assets/image1.jpg', 12, 0),
      new Product(2, 'Latte Coffee', 'This is our specialty Latte Coffee', '../../../assets/image1.jpg', 10, 12),
      new Product(3, 'Americano Coffee', 'This is our specialty Americano', '../../../assets/image1.jpg', 13, 5),
      new Product(4, 'Espresso', 'This is our specialty Espresso', '../../../assets/image1.jpg', 8, 2)
    ]

    @Output() productToOrder = new EventEmitter<any>();


    public addProductToOrder(product: any): void {
      this.productToOrder.emit(product);
    }

}
