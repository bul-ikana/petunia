import { Component } from '@angular/core';

@Component({
  selector: 'result-card',
  templateUrl: 'result-card.html'
})
export class ResultCard {

  concept: string;
  amount: number;

  constructor() {
    this.concept = 'Dinero disponible';
    this.amount = 500;
  }

}
