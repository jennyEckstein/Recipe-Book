
import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'jenny-root',
  templateUrl: './app.component.html',
  providers: [RecipeService]
})
export class AppComponent {
}
