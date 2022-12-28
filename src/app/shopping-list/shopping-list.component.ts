import { Ingredients } from '../shared/ingredients.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 10),
    new Ingredients('Tomatoes', 15),
  ];
  ngOnInit() {}
}
