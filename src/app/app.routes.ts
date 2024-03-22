import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AttributeDirectiveComponent } from './pages/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './pages/structural-directive/structural-directive.component';
import { PipesSampleComponent } from './pages/pipes-sample/pipes-sample.component';

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
  {
    path: 'built-in-pipes',
    component: PipesSampleComponent,
  },
];

// AppComponent Ana component olduğu için bunun yönlendirilmesine gerek yok.
