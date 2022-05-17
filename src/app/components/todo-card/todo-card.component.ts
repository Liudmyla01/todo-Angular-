import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() items:any
  @Output() idTodo : EventEmitter<any>= new EventEmitter();
  todos:any
  constructor() { }

  ngOnInit(): void {

     this.items.pipe(
       map((res:any)=>{
        return res.filter((item:any) => item.completed !== true)
        
       })
     ).subscribe((r:any)=>{
      this.todos = r
      
      console.log(this.todos);
     })
  
  }

  submitId(id:any) {
    this.idTodo.emit(id);
  }
}
