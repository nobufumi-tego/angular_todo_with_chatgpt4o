import { Component } from '@angular/core';

interface Todo {
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  newTodoText: string = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos.push({
        text: this.newTodoText,
        timestamp: new Date()
      });
      this.newTodoText = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // デフォルトのEnterキー動作を防止
      this.addTodo();
    }
  }
}
