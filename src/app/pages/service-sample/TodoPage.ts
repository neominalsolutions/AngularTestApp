import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/TodoService';

// page compnent route dan çağırılacağından selector gerek yok
// HttpClientModule module ile http client işlemleri yapmamızı sağlar
@Component({
  standalone: true,
  templateUrl: './TodoPage.html',
  styleUrls: ['./TodoPage.scss'],
  imports: [CommonModule],
})
export class TodoPageComponent implements OnInit, OnDestroy {
  // Subscription nesnelerine $ keyword tanımlıyoruz
  $todoSubs!: Subscription;
  todos: Todo[] = []; // todos State

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // Doma ilk basıldığı an
    // UseEffect in [] boş dependencyli haline bezer
    // async işlemleri burada yaparız.

    this.$todoSubs = this.todoService.fetchTodos().subscribe({
      next: (response: Todo[]) => {
        console.log('data', response);
        this.todos = [...response];
      },
      error: (err) => {
        console.log('err', err);
      },
      complete: () => {
        // akışta hata olsa da olmasada çalışacak kod
        //alert('işlem yapıldı');
      },
    });
  }

  trackByFunc(item: any) {
    // GetRoWId benzeri bir kullanım
    return item.id;
  }

  ngOnDestroy(): void {
    console.log('component domdan ayrıldığında çalışır');
    this.$todoSubs.unsubscribe();
    // 3rd bir yapı üzerinden asenkron bir kaynağa bağlantığımız için unsubscribe etmeyi unutmuyoruz.
  }
}
