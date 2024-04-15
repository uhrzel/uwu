import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  expression: string = '';

  appendToExpression(value: string) {
    this.expression += value;
  }

  clear() {
    this.expression = '';
  }

  calculate() {
    try {
      let result = eval(this.expression);
      if (this.expression.includes('+')) {
        this.expression = 'I love you';
      } else {
        this.expression = result.toString();
      }
    } catch (error) {
      this.expression = 'Error';
    }
  }
}

@NgModule({
  imports: [FormsModule],
  declarations: [CalculatorComponent],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
