import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() class: string = 'p-3 bg-purple-700 rounded-lg text-white';
  @Output() onClick = new EventEmitter<Event>();

  click(event: Event) {
    this.onClick.emit(event);
  }
}
