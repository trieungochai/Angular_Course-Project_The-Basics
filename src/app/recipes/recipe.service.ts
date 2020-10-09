import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Classic Lasagna',
      'Everyone needs a go-to lasagna recipe.',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-classic-lasagna-vertical-1536611743.jpg',
      [
        new Ingredient('Onion', 1),
        new Ingredient('Tomatoes', 2)
      ]
    ),
    new Recipe(
      'Apple Cider Glazed Chicken',
      'Best eaten after visiting a pumpkin patch.',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/41/1507738986-delish-apple-cider-glazed-chicken-pinterest-still003.jpg',
      [
        new Ingredient('Sweet potato', 1),
        new Ingredient('Apple', 2),
        new Ingredient('Rosemary sprig', 3)
      ]
    ),
    new Recipe(
      'Garlic Rosemary Pork Chops',
      'Not the dry, overcooked chops you were served as a kid.',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520972863-pork-chop-vertical.jpg',
      [
        new Ingredient('Pork chops', 4),
        new Ingredient('Garlic', 2),
        new Ingredient('Butter', 0.5)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}