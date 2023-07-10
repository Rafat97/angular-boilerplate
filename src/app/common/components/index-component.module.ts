import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextBoxComponent } from './text-box/text-box.component';

const uiComponent = [ButtonComponent, TextBoxComponent];

@NgModule({
  declarations: [...uiComponent],
  imports: [CommonModule],
  exports: [...uiComponent],
})
export class IndexComponentModule {}
