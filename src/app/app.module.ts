import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './todo-list/footer/footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './todo-list/navbar/navbar.component';
import { MenubarComponent } from './todo-list/menubar/menubar.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { TaskListComponent } from './todo-list/task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './todo-list/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent, FooterComponent, TodoListComponent, NavbarComponent, MenubarComponent,TaskListComponent,AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TodoListModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
