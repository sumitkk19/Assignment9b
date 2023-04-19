import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  str = 'Hello everyone';
  count: number;

  constructor(private stringService: StringService) {
    this.count = stringService.countCapital(this.str);
  }

}
