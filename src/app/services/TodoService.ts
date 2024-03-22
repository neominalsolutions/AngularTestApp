import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Todo } from '../models/Todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Bütün uygulama genelinden çağırılabilir.
// componentlere constructor injection ile kullanılır

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  fetchTodosAxios(): Promise<AxiosResponse> {
    // axios ile çekilebilir
    return axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  fetchTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
