import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Input } from '@angular/core';



@Component({
  selector: 'product-card',
  imports: [RouterOutlet],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCard {
  @Input() name = '';
  @Input() description = '';
  @Input() path = '';
  @Input() price = 0;
  @Input() likes = 0;

  @Output() productOrder = new EventEmitter<any>();

  public orderProduct() :void {
    this.productOrder.emit(this.name);
  }
}
