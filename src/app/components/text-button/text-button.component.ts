import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-button',
  imports: [],
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.css',
})
export class TextButton {
  text = input.required<string>();
}
