import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: Array<any>;

  constructor(public navCtrl: NavController) {
    this.cards = this.getCards();
  }

  getCards() {
  	return [
  		{"concept": "Dinero total", "amount": 2000, "color": "leaf"},
  		{"concept": "Dinero en efectivo", "amount": 1000, "color": "flower"},
  		{"concept": "Dinero en banco", "amount": 600, "color": "leaf"},
  		{"concept": "Dinero en ahorro", "amount": 400, "color": "flower"},
  		{"concept": "Dinero en steam", "amount": 60, "color": "leaf"},
  		{"concept": "Dinero en paypal", "amount": 40, "color": "flower"},
  	];
  }

}
