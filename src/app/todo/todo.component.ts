import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos;
  text;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        text:"To do one"
      },
      {
        text:"To do two"
      }
    ];
  }
  addTodo(){
    this.todos.push({
      text: this.text
    });
    this.text = '';
  }
  deleteTodo(deleteText){
    for(var i = 0; i < this.todos.length; i++){
      if(this.todos[i].text == deleteText){
        this.todos.splice(i,1);
      }
    }
  }

}
