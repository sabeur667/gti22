import { Injectable } from '@angular/core';
import {Todo} from "../model/todo";
import {LoggerService} from "../../services/logger.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService
  ) { }
  logTodos(): void {
    this.loggerService.log(this.todos);
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  getTodos(): Todo[] {return this.todos;}
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}
