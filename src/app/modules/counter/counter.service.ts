import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter: number = 0;

  constructor() {}

  increment() {
    this.counter = this.counter + 1;
    return this.counter;
  }

  decrement() {
    this.counter = this.counter - 1;
    return this.counter;
  }
}
