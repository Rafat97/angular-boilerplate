import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent {
  @Input() text = 'Default Text';
  @Input() class = 'text-xl';
}
