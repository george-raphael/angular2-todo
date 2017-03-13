import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos;
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

}
