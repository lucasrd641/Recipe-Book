import { EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Delicious Chicken',
  //     'Yummy Chicken',
  //     'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2020/03/Parm-Roast-Chicken-iStock-467639186-1024x576.jpg',
  //     [
  //       new Ingredient('Chicken', 1),
  //       new Ingredient('Pepper', 2),
  //       new Ingredient('Love', 999),
  //     ]
  //   ),
  //   new Recipe(
  //     'Cauliflower Mac and Cheese',
  //     'Not that yummy',
  //     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1712H_Cauliflower-Mac-and-Cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580140849133.jpeg',
  //     [new Ingredient('Cauliflower', 10), new Ingredient('Cheese', 2)]
  //   ),
  // ];
  constructor(private store: Store<fromApp.AppState>) {}

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }
  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }
  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipeById(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipeById(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
