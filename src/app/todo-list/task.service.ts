import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  a = 'http://localhost:3000'
  url: string = "http://localhost:3000/api/tasks";
  addurl: string = "http://localhost:3000/api/task";
  statusurl: string = "http://localhost:3000/api/task/status/";
  updateurl: string = "http://localhost:3000/api/task/";
  categoryListurl: string = "http://localhost:3000/api/categoryList";
  categoryurl: string = "http://localhost:3000/api/task/category/";

  getAllTask(): Observable<Task> {
    return this.http.get<Task>(this.url);
  }
  addTask(task: Task) {
    return this.http.post<Task>(this.addurl, task);
  }
  updateTask(task: Task) {
    return this.http.put<Task>(this.updateurl + task._id, task)
  }
  getByStatus(status: string): Observable<Task> {
    return this.http.get<Task>(this.statusurl + status);
  }
  getCategoryList(): Observable<String> {
    return this.http.get<String>(this.categoryListurl);
  }
  getByCategory(category: string): Observable<Task> {
    return this.http.get<Task>(this.categoryurl + category);
  }
}
/**/