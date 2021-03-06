import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
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

  constructor(private http: Http) { }

  getRecipes(){
  	return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-9db86.firebaseio.com/recipes.json', body, {headers: headers});

  }

  fetchData(){
    return this.http.get('https://recipebook-9db86.firebaseio.com/recipes.json')
    .map((response: Response) => response.json())
    .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}
