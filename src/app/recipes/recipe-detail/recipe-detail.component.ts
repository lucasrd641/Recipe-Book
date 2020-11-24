import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as fromApp from '../../store/app.reducer';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import * as RecipesAction from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => {
          return +params.id;
        }),
        switchMap((id) => {
          this.id = id;
          return this.store.select('recipes');
        }),
        map((recipesState) => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe((recipe) => (this.recipe = recipe));
  }

  onAddToShoppingList(ingredients: Ingredient[]): void {
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // ingredients.forEach((ingredient: Ingredient) => {
    //   this.slService.addIngredient(ingredient);
    // });
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(this.recipe.ingredients)
    );
  }
  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteRecipe(): void {
    // this.recipeService.deleteRecipeById(this.id);
    this.store.dispatch(new RecipesAction.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
