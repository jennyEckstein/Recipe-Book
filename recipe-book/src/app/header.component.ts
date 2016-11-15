import { Component } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'jenny-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }

  onStore(){
  	this.recipeService.storeData().subscribe(
  		data => console.log(data))
  }

  onFetch(){
  	this.recipeService.fetchData();
  }

}
