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
		path: 'details/:name',
		//:name identifies the route parameter
		//here :name is dynamic and will change based on how the route is requested by the code.
		// see the interface for a recipe: src\app\models\recipe.ts
		component: DetailsComponent,
		title: 'Recipe details'
	}
  ];

export default routes; //imported in app.config.ts