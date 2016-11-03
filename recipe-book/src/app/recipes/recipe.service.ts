import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
      new Recipe(
        'Chicken Soup',
         'Chicken soup is a soup made from chicken, simmered in water, usually with various other ingredients.',
         'https://recipeland.com/images/r/18707/d8a75a658379a5c91f80_400.jpg',
         [new Ingredient('Chicken', 1), new Ingredient('Water', 5)]
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

  constructor() { }

  getRecipes(){
  	return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
