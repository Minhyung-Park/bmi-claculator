import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Height: number;
  Weight: number;
  bmi: number;
  bmiMessage: string;

  constructor(public navCtrl: NavController) { }

CalculateBMI () {
  this.bmi = this.Weight / (this.Height * this.Height);
  this.bmi = parseFloat(this.bmi.toFixed(2));

if (this.bmi < 18.5) {
  this.bmiMessage = "Underweight";
} else if (this.bmi > 18.5 && this.bmi < 25) {
  this.bmiMessage = "Normal";
} else if (this.bmi > 25 && this.bmi < 30) {
  this.bmiMessage = "overweight";
} else {
  this.bmiMessage = "obese";
}
}
}
