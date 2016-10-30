import {
  Component,
  Input
} from '@angular/core';

import { ResultCardModel } from './result-card-model'

@Component({
  selector: 'result-card',
  templateUrl: 'result-card.html'
})
export class ResultCard {

  @Input() model: ResultCardModel;

  constructor() { }

}
