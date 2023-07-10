import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponentModule } from '@selfApp/common/components/index-component.module';
import { CounterModule } from '@selfApp/modules/counter/counter.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CounterModule, IndexComponentModule],
})
export class HomeModule {}
