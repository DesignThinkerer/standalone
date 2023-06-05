import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*
* RouterModule is a module that provides the router service providers and directives needed for routing
* RouterOutlet is included in the RouterModule
*/
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'body', // changed from 'app-root' to benefit from the implicit aria roles of the HTML5 semantic elements
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent, IonicModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scidélice';
}
