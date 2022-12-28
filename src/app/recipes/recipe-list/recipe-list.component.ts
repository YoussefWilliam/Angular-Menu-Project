import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is just a test, no big deal',
      'https://www.bbcgoodfoodme.com/wp-content/uploads/2022/07/Gnocchi_2.jpg'
    ),
  ];

  ngOnInit(): void {}
}
