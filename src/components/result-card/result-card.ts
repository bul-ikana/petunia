import { 
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'result-card',
  templateUrl: 'result-card.html'
})
export class ResultCard {

  @Input() concept: string;
  @Input() amount: number;

  constructor() {

  }

}
