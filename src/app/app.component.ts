import { Component, OnInit} from '@angular/core';
import { TodoService } from './service/todo.service';
import SwiperCore, { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { Subject, take } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
SwiperCore.use([FreeMode, Scrollbar, Mousewheel]);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public todosList : any[] = [];
  public todos$ = new Subject();
  public getStartItems:number = 0;
  public getEndItems:number = 20;
  public allItemsCount = 0;
  public activeCount = 0;
  public countCompleted = 0;
  constructor(private _todosService:TodoService){}

  form:FormGroup = new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(2)]),
    completed: new FormControl(false),
  });


  ngOnInit(): void {
    this._todosService.getItems(this.getStartItems,this.getEndItems)
    .pipe(take(1)).subscribe((res:any)=>{
      this.todos$.next(res);
    })
    
    this.todos$.subscribe((res:any)=>{
      
      this.todosList = res
      this.allItemsCount = res.length
      
    })

        this.todos$.pipe(take(1)).subscribe(()=>{
          
          this.allItemsCount = this.todosList.length
      this.todosList.forEach((item:any)=>{
        item.completed ? this.countCompleted++ : this.activeCount++
      })
    })
  }

  addTodo(){

    if(this.form.valid){
      console.log('inval');
      
      let newTodo = {
        id:this.todosList.length+1,
       ...this.form.value
       }
   
       this.todos$.next([newTodo,...this.todosList])
       if(this.form.valid){
         this._todosService.postItem(this.form.value)
        this.form.patchValue({
          title:''
        }) 
        this.activeCount++
       }
    }
    
    
  }

  removeTodo(todo:any){
   
      this.activeCount--;
      this.countCompleted++  ;
      this.todosList.forEach((i)=>{
        if(i.id == todo.id){
          i.completed = true
        }
      })
      this.todos$.next(this.todosList)
      this._todosService.removeItem(todo.id);
 
  }

}
