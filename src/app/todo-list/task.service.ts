import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/api/tasks";
  addurl: string = "http://localhost:3000/api/task";
  deleteurl: string = "http://localhost:8679/program-update/program/";
  fetchurl: string = "http://localhost:8679/program-view/program/";
  updateurl: string = "http://localhost:8679/program-update/updateprogram";
  specifictimeurl: string = "http://localhost:8679/program-view/programs/";


  getAllTask(): Observable<Task> {
    return this.http.get<Task>(this.url);
  }
  addTask(task:Task){
    return this.http.post<Task>(this.addurl,task);
  }
}
/**/