import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
];

// AppComponent Ana component olduğu için bunun yönlendirilmesine gerek yok.
