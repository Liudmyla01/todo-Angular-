import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

interface Todo  {
  title:string,
  completed:boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
baseUrl:string = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http:HttpClient) { }

  getItems(start:number, limit:number){
   return this.http.get(`${this.baseUrl}?_start=${start}&_limit=${limit}`)
  }
  postItem(body:Todo){
    this.http.post(`${this.baseUrl}`, body).pipe(take(1)).subscribe()
  }
  removeItem(id:any){
    this.http.delete(`${this.baseUrl}/${id}`).pipe(take(1)).subscribe()
  }
}
