import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ResultCardModel } from '../../components/result-card/result-card-model'

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
  		{"model": new ResultCardModel("Dinero total",2000), "color": "leaf"},
  		{"model": new ResultCardModel("Dinero en efectivo", 1000), "color": "flower"},
  		{"model": new ResultCardModel("Dinero en banco", 600), "color": "leaf"},
  		{"model": new ResultCardModel("Dinero en ahorro", 400), "color": "flower"},
  		{"model": new ResultCardModel("Dinero en steam", 60), "color": "leaf"},
  		{"model": new ResultCardModel("Dinero en paypal", 40), "color": "flower"},
  	];
  }

}
