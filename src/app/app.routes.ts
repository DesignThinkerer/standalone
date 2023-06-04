import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

 const routes: Routes =  [
	{
	  path: '',
	  component: HomeComponent,
	  title: 'Home page'
	},
	{
		path: 'details/:name',// see the interface for a recipe: src\app\models\recipe.ts
		component: DetailsComponent,
		title: 'Recipe details'
	}
  ];

export default routes; //imported in app.config.ts