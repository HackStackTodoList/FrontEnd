import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { FooterComponent } from './footer/footer.component';
import { TodoListComponent } from './todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoListRoutingModule
  ],
  exports:[
    
  ]
})
export class TodoListModule { }
