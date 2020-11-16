import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private slService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  onAddToShoppingList(ingredients: Ingredient[]): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // ingredients.forEach((ingredient: Ingredient) => {
    //   this.slService.addIngredient(ingredient);
    // });
  }
  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteRecipe(): void {
    this.recipeService.deleteRecipeById(this.id);
    this.router.navigate(['/recipes']);
  }
}
