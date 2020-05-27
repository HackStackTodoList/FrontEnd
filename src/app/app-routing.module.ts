import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskListComponent } from './todo-list/task-list/task-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  /*{
    path: "task",
    loadChildren: () => import('./todo-list/todo-list.module').then(module => module.TodoListModule)
  },*/
  {
    path: "", component: TodoListComponent
  },
  {
    path: "task", component: TodoListComponent,
    children:
      [
        {
          path: "list", component: TaskListComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
