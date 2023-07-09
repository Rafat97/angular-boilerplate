import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextBoxComponent } from './text-box/text-box.component';

const UiComponent = [ButtonComponent, TextBoxComponent];

@NgModule({
  declarations: [...UiComponent],
  imports: [CommonModule],
  exports: [...UiComponent],
})
export class IndexComponentModule {}
