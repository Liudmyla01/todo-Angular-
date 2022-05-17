import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo-inform',
  templateUrl: './todo-inform.component.html',
  styleUrls: ['./todo-inform.component.scss']
})
export class TodoInformComponent{
@Input() all:any
@Input() active:any
@Input() completed:any


  constructor() { }

  }


