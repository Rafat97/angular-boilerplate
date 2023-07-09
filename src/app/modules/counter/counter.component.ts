import { Component, Input } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counter: number = 0;

  constructor(public counterService: CounterService) {}

  increment() {
    this.counter = this.counterService.increment();
  }

  decrement() {
    this.counter = this.counterService.decrement();
  }
}
