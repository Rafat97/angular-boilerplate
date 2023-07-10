import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _counter = 0;

  constructor() {
    // initialize
  }

  increment(): number {
    this._counter = this._counter + 1;
    return this._counter;
  }

  decrement(): number {
    this._counter = this._counter - 1;
    return this._counter;
  }
}
