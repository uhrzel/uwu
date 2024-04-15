import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorModule } from "./calculator/calculator.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalculatorModule]
})
export class AppComponent {
  title = 'angular-proj';
}
