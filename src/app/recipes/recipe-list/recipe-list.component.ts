import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2020/03/Parm-Roast-Chicken-iStock-467639186-1024x576.jpg'),
    new Recipe('A Test Recipe 2', 'This is a second test', 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2020/03/Parm-Roast-Chicken-iStock-467639186-1024x576.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
