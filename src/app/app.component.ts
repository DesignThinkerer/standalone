import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*
* routermodule is a module that provides the router service providers and directives needed for routing
* routeroutlet is included in the routermodule
*/
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'body', // changed from 'app-root' to benefit from the implicit aria roles of the HTML5 semantic elements
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scidélice';
}
