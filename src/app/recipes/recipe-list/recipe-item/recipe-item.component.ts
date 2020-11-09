import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onRecipeSelected(){
    this.recipeSelected.emit();
  }

}
