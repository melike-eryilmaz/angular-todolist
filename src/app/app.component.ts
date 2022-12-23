import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface Todo {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todolist';
  name = new FormControl();
  todos : Todo[] = [
    {name:"List Item 1"},
    {name:"List Item 2"},
    {name:"List Item 3"}
  ];
  addTodo(){
    this.todos.push({
      name:this.name.value
    });
    this.name.setValue("");
  }
  deleteTodo(event:MouseEvent,todo:Todo){
    this.todos = this.todos.filter(item => item.name !== todo.name);
  }
  ngOnInit(): void {
    this.name.valueChanges.subscribe(val => {
      this.todos = this.todos.filter(item => item.name.toLocaleLowerCase().includes(val));
    });
  }
}
