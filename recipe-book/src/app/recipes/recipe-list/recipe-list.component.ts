import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'jenny-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
      new Recipe(
        'Chicken Soup',
         'Chicken soup is a soup made from chicken, simmered in water, usually with various other ingredients.',
         'https://recipeland.com/images/r/18707/d8a75a658379a5c91f80_400.jpg',
         []
        ),
      new Recipe(
         'Meatball',
         'A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter and seasoning.',
         'http://www.fusionlifebrands.com/sites/default/files/recipe_images/Grandma-Meatballs.jpg',
         []
        ),
      new Recipe(
          'Lasagne',
          'Lasagne are wide, flat-shaped pasta, and possibly one of the oldest types of pasta.',
          'http://www.coolhomerecipes.com/wp-content/uploads/sites/317/2015/04/bechamel-beef-lasagna-400x300.jpg',
          []
        )
  ];
	@Output() recipeSelected = new EventEmitter<Recipe>();
/*	recipe = new Recipe('Dummy', 'Dummy', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTS29tEchi1J_L0uuONTOItXwi5fylpbpc5dhAzvXDfaDjQ7Ysh');
*/


  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe){
  		this.recipeSelected.emit(recipe);
  }
}
