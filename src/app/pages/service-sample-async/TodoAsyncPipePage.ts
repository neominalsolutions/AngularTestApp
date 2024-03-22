import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../../services/TodoService';
import { Todo } from '../../models/Todo';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// page compnent route dan çağırılacağından selector gerek yok
// HttpClientModule module ile http client işlemleri yapmamızı sağlar
@Component({
  standalone: true,
  templateUrl: './TodoAsyncPipePage.html',
  styleUrls: ['./TodoAsyncPipePage.scss'],
  imports: [CommonModule],
})
export class TodoAsyncPipePage implements OnInit {
  $todos!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // Doma ilk basıldığı an
    // UseEffect in [] boş dependencyli haline bezer
    // async işlemleri burada yaparız.
    this.$todos = this.todoService.fetchTodos();
  }

  trackByFunc(item: any) {
    // GetRoWId benzeri bir kullanım
    return item.id;
  }
}
