import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'jenny-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipe = new Recipe('Dummy', 'Dummy', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTS29tEchi1J_L0uuONTOItXwi5fylpbpc5dhAzvXDfaDjQ7Ysh');

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe){
  		this.recipeSelected.emit(recipe);
  }
}
