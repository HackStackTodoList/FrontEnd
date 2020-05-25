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

@NgModule({
  declarations: [
    AppComponent, FooterComponent, TodoListComponent, NavbarComponent, MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    TodoListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
