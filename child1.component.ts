import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  num = 8
  isPrime: boolean;

  constructor(private numberService: NumberService) {
    this.isPrime = numberService.chkPrime(this.num);

  }
}

