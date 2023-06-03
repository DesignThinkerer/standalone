import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipeComponent } from "../recipe/recipe.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RecipeComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {}
