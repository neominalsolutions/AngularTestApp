import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TextDecorationDirective } from '../../directives/text-decoration.directive';

export interface Person {
  id: number;
  name: string;
  surname: string;
  title?: string;
  deparment?: string;
}
// NgIf,NgSwitchCase,NgFor Common Module ihtiyaç duyar
// Component içinde directive kullanmak için imports kısıma directive tanımladık
@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, TextDecorationDirective],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss',
})
export class StructuralDirectiveComponent {
  persons: Person[] = [
    {
      id: 1,
      name: 'Ali',
      surname: 'Tan',
      title: 'Manager',
      deparment: 'IK',
    },
    {
      id: 2,
      name: 'Ahmet',
      surname: 'Can',
      deparment: 'IT',
    },
    {
      id: 3,
      name: 'Hakan',
      surname: 'San',
    },
  ];

  title!: string;

  constructor(public meta: Meta) {}
}
