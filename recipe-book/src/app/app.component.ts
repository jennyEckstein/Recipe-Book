import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component'

@Component({
  selector: 'jenny-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HeaderComponent, RecipesComponent]
})
export class AppComponent {
  title = 'jenny works!';
}
