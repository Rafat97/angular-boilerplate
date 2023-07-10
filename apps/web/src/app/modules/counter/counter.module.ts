import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { IndexComponentModule } from '@selfApp/common/components/index-component.module';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, IndexComponentModule],
  exports: [CounterComponent],
})
export class CounterModule {}
