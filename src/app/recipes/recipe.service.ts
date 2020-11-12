import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Delicious Chicken',
      'Yummy Chicken',
      'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2020/03/Parm-Roast-Chicken-iStock-467639186-1024x576.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Pepper', 2),
        new Ingredient('Love', 999),
      ]
    ),
    new Recipe(
      'Cauliflower Mac and Cheese',
      'Not that yummy',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1712H_Cauliflower-Mac-and-Cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580140849133.jpeg',
      [new Ingredient('Cauliflower', 10), new Ingredient('Cheese', 2)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }
}
