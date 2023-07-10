import { Component, Input } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() counter = 0;

  constructor(public counterService: CounterService) {}

  increment(): void {
    this.counter = this.counterService.increment();
  }

  decrement(): void {
    this.counter = this.counterService.decrement();
  }
}
