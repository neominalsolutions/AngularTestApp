import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// NgModel FormsModule
// routerLink RouterModule
// Directive ngClass,ngStyle CommonModule

@Component({
  selector: 'app-directive-sample',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss',
})
export class AttributeDirectiveComponent {
  active: boolean = false;
  text: string = '';
}
