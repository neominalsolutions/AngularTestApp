import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AttributeDirectiveComponent } from './pages/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './pages/structural-directive/structural-directive.component';

export const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectiveComponent,
  },
  {
    path: 'structural-directive',
    component: StructuralDirectiveComponent,
  },
];

// AppComponent Ana component olduğu için bunun yönlendirilmesine gerek yok.
