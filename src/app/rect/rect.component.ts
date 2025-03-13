import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // by the combination of @input and @Output we crate the 'size' property two-way bindable
  @Input({required: true}) size!: {width: string; height: string}
  @Output() sizeChange = new EventEmitter<{width: string; height: string}>() // the 'Change' keyword is important as it tells angular that this @OutPut and @Input with same name are two-way bindable
  onReset() {
    this.sizeChange.emit({
      width: '200',
      height: '100'
    })
  }
}
