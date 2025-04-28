import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header-component/header.component'
import { TypesDivider } from '../types-component/types.component';
import { SpecialSection } from '../special-section-component/special-section.component';
import { FooterComponent } from '../footer-component/footer.component';

@Component({
  selector: 'main-page',
  imports: [RouterOutlet, Header, TypesDivider, SpecialSection, FooterComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class MainPage {
  sectionName1 = "COFFEE";
  sectionName2 = "DESSERT";

  orderedCoffee = ''

  public addToOrder(product: string): void {
    this.orderedCoffee = product;
  }
}
