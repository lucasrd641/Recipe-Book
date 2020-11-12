import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.html'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  constructor(private slService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredient: Ingredient[]) => (this.ingredients = ingredient)
    );
  }
}
